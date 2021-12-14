const log4js = require('log4js'), url = require('url'), dateFormat = require('date-format'), config = require('config');
const msgIndex = 0, moreParamsIndex = 1, dateFormatPattern = 'yyyy-MM-dd hh:mm:ss.SSS';

const whiteListHeaders = [
    'sm_user', 'sm_realm', 'sm_serversessionid', 'sm_transactionid', 'sm_universalid',
    'pragma', 'cache-control', 'accept', 'accept-language', 'accept-encoding', 'connection', 'host', 'user-agent',
    'bnhp_moduletime out', 'accept-encoding', 'referer', 'x-forwarded-for', 'content-type'
];

const getHeaders = (req) => {
    const headers = {};

    if (req && req.headers){
        for (let name of whiteListHeaders) {
            if (name in req.headers){
                headers[name] = req.headers[name];
            }
        }
    }

    return headers;
};

log4js.addLayout('json', (config) => {
    return (logEvent) => {
        const log = {};

        log.startTime = dateFormat(dateFormatPattern, new Date(logEvent.startTime));
        // log.categoryName = logEvent.categoryName;
        log.level = logEvent.level.levelStr;
        log.pid = logEvent.pid;

        log.message = '' + logEvent.data[msgIndex] || '';

        if (logEvent.data[moreParamsIndex]) {
            if (logEvent.data[moreParamsIndex].duration) log.duration = logEvent.data[moreParamsIndex].duration;
            if (logEvent.data[moreParamsIndex].req) log.req = logEvent.data[moreParamsIndex].req;
            if (logEvent.data[moreParamsIndex].res) log.res = logEvent.data[moreParamsIndex].res;
            if (logEvent.data[moreParamsIndex].err) log.err = logEvent.data[moreParamsIndex].err;
        }

        return JSON.stringify(log);
    };
});

const serverHitsAppender = {
    layout: {type: 'json', separator: ','}
};

// log to file OR std
if (config.has('log.filePath')){
    serverHitsAppender.type = 'file';
    serverHitsAppender.filename = config.get('log.filePath');
} else {
    serverHitsAppender.type = 'stdout';
}

log4js.configure({
    pm2: true,
    pm2InstanceVar: 'INSTANCE_ID',
    // disableClustering: true,

    appenders: {
        serverHits: serverHitsAppender,
    },
    categories: {
        default: {
            appenders: ['serverHits'],
            level: config.get('log.level'),
            maxLogSize: config.get('log.maxLogSize'),
            backups: config.get('log.backups'),
            compress: config.get('log.compress'),
        }
    }
});

const logger = log4js.getLogger('serverHits');


// serialize bug in log4js - circular json
['trace', 'debug', 'info', 'warn', 'error', 'fatal'].forEach(key => {
    const t = logger[key];
    logger[key] = function(){

        if (arguments[moreParamsIndex]){
            if (arguments[moreParamsIndex].req){
                const req = arguments[moreParamsIndex].req;
                const fullUrl = decodeURIComponent(url.format({
                    protocol: req.protocol,
                    host: req.get('host'),
                    pathname: req.originalUrl
                }));

                arguments[moreParamsIndex].req = {
                    url: fullUrl,
                    headers: getHeaders(req),
                    body: req.body || null
                };
              
                if (req.query) {
                    arguments[moreParamsIndex].req.queryParams = req.query;
                }

                // set duration
                if (req.t){
                    arguments[moreParamsIndex].duration = Math.round(Date.now() - req.t);
                }
            }
            if (arguments[moreParamsIndex].res){
                const res = arguments[moreParamsIndex].res;

                arguments[moreParamsIndex].res = {
                    statusCode: res.statusCode,
                    headers: res.headers
                };

                if (res.getHeaders) {
                    arguments[moreParamsIndex].res.headers = res.getHeaders();
                }
            }
            if (arguments[moreParamsIndex].err){
                const err = arguments[moreParamsIndex].err;

                arguments[moreParamsIndex].err = {stack: err.stack};
            }
        }

        return t.apply(this, arguments);
    };
});

module.exports = logger;
