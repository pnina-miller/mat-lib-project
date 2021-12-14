/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as express from 'express';
import * as config from 'config';
import * as fs from 'fs';
import * as jsdom from 'jsdom';
import * as helmet from 'helmet';
import * as https from 'https';

import * as logger from './logger';

const app = express();

// Helmet - Amam hardening
if (config.has('helmet')) {
  app.use(helmet(config.get('helmet')));
}

// set start time for duration calculation
app.use((req, res, next) => {
  req['t'] = Date.now();
  next();
});

// Angular Route
if (config.has('ng')){
  const ng = config.get('ng');

  app.use(`${ng.context}`, express.static(ng.staticFolder, {index: false, redirect: false, maxAge: config.get('maxAge') * 1000}));
  app.get(`${ng.context}/*`, (req, res) => {
    let cacheContent;
    if (! cacheContent) {
      const content = fs.readFileSync(`${ng.staticFolder}/index.html`, 'utf8');
      const dom = new jsdom.JSDOM(content);
      const document = dom.window.document;

      const baseEl = document.querySelector('base');
      baseEl.setAttribute('href', `${ng.context}/`);

      const configScript = document.getElementById('config-script');
      if (configScript) {
        const keys = config.has('keys') ? config.get('keys') : {};
        configScript.textContent = `var bnhpApp = window.bnhpApp || {};
            bnhpApp.envName = ${ JSON.stringify( config.get('envName')) };
            bnhpApp.baseHref = ${JSON.stringify(ng.context)};
            bnhpApp.apiContext = ${JSON.stringify(config.get('api.context'))};
            bnhpApp.keys = ${JSON.stringify(keys)};
        `;
      }

      cacheContent = dom.serialize();
    }

    res.send(cacheContent);
    logger.info('Page Found', {req : req, res: res});
  });
}

// page not found
app.get('/*', (req, res) => {
  res.status(404).send('');
  logger.error('Page Not Found', {req: req, res: res});
});

// exception handler
app.use(function (err, req, res, next) {
  res.status(500).send('');
  logger.fatal('Exception', {err: err, req: req, res: res});
});

// Server lister
const port = config.get('port') || 3000;

let server;
if (config.has('ssl')) {
  const ssl = config.get('ssl');
  const options = {
    key: fs.readFileSync(ssl.key),
    cert: fs.readFileSync(ssl.cert),
  };

  server = https.createServer(options, app);
} else {
  server = app;
}

server.listen(port, () => {
  logger.info(`Listening at http://localhost:${port}/`);
});
server.on('error', logger.error);
server.on('clientError', (err, socket) => {
  logger.info(err);
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

