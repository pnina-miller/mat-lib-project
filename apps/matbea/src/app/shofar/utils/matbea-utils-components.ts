export class MatbeaUtils {
    static getServiceUrl(serviceName: string): string {        
         return this.getServicePrefix() + serviceName;
    }


    static getServicePrefix(): string {        
        if(window.location.href.startsWith('http://localhost:4200/')){
           return 'http://localhost:8080';
        }else{
            return 'http://testmatbea.bnhptest.com:9106/wps/PA_MatbeaShServer/MatbeaDispatcherServlet?serviceName=';
       }
   }
   

}



