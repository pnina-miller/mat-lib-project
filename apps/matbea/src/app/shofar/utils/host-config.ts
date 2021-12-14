export class config {

    public static getEnvironmentHost() {
        var environmentLH: string;
        var environmentP: string;
        var enveronmentPN: string;
        var data = {};
        environmentLH = window.location.hostname;
        environmentP = window.location.port;
        enveronmentPN = window.location.pathname;

        console.log('hostname: ' + environmentLH);
        console.log('port: ' + environmentP);
        console.log('PATHNAME ' + enveronmentPN);
        console.log(window.location.pathname)
 
        if (environmentLH == 'localhost') {
            if (environmentP == '4200') {
                enveronmentPN = ''
                //  enveronmentPN= '/contactHistory/rest/ch/'
                environmentP = '8080'
                //   environmentP='20001'

            }
        }

        switch (environmentLH) {
            case "localhost":
                data = {
                    endPoint: 'http://' + environmentLH + ':' + environmentP + enveronmentPN
                    // endPoint: 'https://tccapp01.resource.bank:5423/contactHistory-dev/rest/ch/'
                };
                break;
           
            default:
                data = {
                    endPoint: 'http://testmatbea.bnhptest.com:9106/wps/PA_MatbeaShServer'
                };
        }
        let temp= data['endPoint'];
        return temp;
    }
}