import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CreateProjectWizardData } from "../create-project-wizard/create-project-wizard-common/create-project-wizard-data";
import { Observable } from "rxjs";
import { map, tap, take } from "rxjs/operators";
import { Avcmp01m } from "../utils/Avcmp01m";
import { ColumnDefinition } from "../store/models/column-definition.model";
import { Project } from "../store/models/project.model";
import { HttpService } from "../utils/http.service";
import { saveMskDataType } from '../project-details-components/mashkanta/natuney-mashkanta/natuney-mashkanta-data';
import { MatbeaUtils } from "../utils/matbea-utils-components";
import { AmalotDataType } from "../project-details-components/amalot/amalot/amalot.data";
// import { SqlResult } from "../../../../../../libs/matbea-shared-components/src/lib/beans/general-response";
import { shalavDataType } from "../shlavim-details/shalav.data";

@Injectable({
    providedIn: 'root',
  })
export class ShofarServices{

    params: HttpParams;
    urlPrefix: string = MatbeaUtils.getServicePrefix();

    constructor(private httpClient: HttpClient, private httpService: HttpService) { }

    public getKodMutva(kodMutav: string){
        return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/projects/0/' + kodMutav + '/details', { headers: this.getHeader(), params: {'kodMutavBeShovar': kodMutav} });
    }

    public getPirteyProject(kodMutav: string, misparProyectSagur: string){
        return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/projects/' + misparProyectSagur + '/' + kodMutav + '/details', { headers: this.getHeader(), params: {'kodMutavBeShovar': kodMutav, 'misparProyectSagur': misparProyectSagur} });
    }

    public savePirteyProject(projectDetailsData){
      return this.httpClient.request("post", this.urlPrefix + '/matbea/shofar/V1/projects/' + projectDetailsData.misparProyectSagur + '/save', { headers: this.getHeader(), params: {'projectDetailsData': JSON.stringify(projectDetailsData)} });
  }

    public getCreateProjectWizardComboboxes(){
        return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/project/wizard/projectdetallists', { headers: this.getHeader(), params: {} });
    }

    public getCitiesList(){
      return this.httpClient.request("get", this.urlPrefix + '/matbea/common/v1/cities', { headers: this.getHeader(), params: {} });
    }
    

    public saveNewProject(wizardData: CreateProjectWizardData){
        return this.httpClient.request("post", this.urlPrefix + '/matbea/shofar/V1/project/wizard/save', { headers: this.getHeader(), params: {'projectDetailsData': JSON.stringify(wizardData)} });
    }

    public getCheshbonotProject(misparProyectSagur: string){
        return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/cheshbonot/' + misparProyectSagur + '/list', { headers: this.getHeader(), params: {'misparProyectSagur': misparProyectSagur} });
    }

    public removeCheshbon(misparProyectSagur: string, misparBank: string, misparSnif: string, misparCheshbon: string){
        return this.httpClient.request("post", this.urlPrefix + '/matbea/shofar/V1/cheshbonot/' + misparProyectSagur + '/' + misparBank + '/' + misparSnif + '/' + misparCheshbon + '/remove', { headers: this.getHeader(), params: {'misparProyectSagur': misparProyectSagur, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    }

    public hagderKeArvut(misparProyectSagur: string, misparBank: string, misparSnif: string, misparCheshbon: string){
        return this.httpClient.request("post", this.urlPrefix + '/matbea/shofar/V1/cheshbonot/' + misparProyectSagur + '/' + misparBank + '/' + misparSnif + '/' + misparCheshbon + '/update', { headers: this.getHeader(), params: {'misparProyectSagur': misparProyectSagur, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    }

    getpirteyShalav(misparProyectSagur: number, misparShalv:number) {//404
      return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/projects/v1/steps/'+misparProyectSagur+'/'+misparShalv, { headers: this.getHeader() }).pipe(
        map((res:any)=>{
          return (res.data.avcmp06m )
        }))
    }

    public saveShalav(shalavData: shalavDataType, misparProject){
      return this.httpClient.request("post", this.urlPrefix +  '/matbea/shofar/projects/v1/steps', {headers: this.getHeader(), params: { projectShlavData: JSON.stringify(shalavData) }});
    }

    getyechidot(misparProyectSagur:number, misparShalv:number) {
      return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/projects/steps/appartments/'+misparProyectSagur+'/'+misparShalv+'/1', { headers: this.getHeader() }).pipe(map((res:{data:any})=>{
      return res.data.avctl071List.fullList;
      }))
    }
    savePinkasShovarim(misparProyectSagur:string, misparShalv:string, sendTo){
      return this.httpClient.request("get", this.urlPrefix + `/matbea/shofar/projects/v1/${misparProyectSagur}/shlavim/${misparShalv}/pinkasShovarim/sendTo/${sendTo}`, { headers: this.getHeader() })

    }
    // public getPirteyCheshbon(misparProject: string, misparBank: string, misparSnif: string, misparCheshbon: string){
    //     return this.httpClient.request("get", this.urlPrefix + '/shofar/cheshbonot/getPirteyCheshbon', { headers: this.getHeader(), params: {'misparProyectSagur': misparProject, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    public getPirteyCheshbon(misparProyectSagur: string, misparBank: string, misparSnif: string, misparCheshbon: string){
        return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/cheshbonot/' + misparProyectSagur + '/' + misparBank + '/' + misparSnif + '/' + misparCheshbon + '/popup/add', { headers: this.getHeader(), params: {'misparProyectSagur': misparProyectSagur, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    }

    public hosefCheshbon(misparProyectSagur: string, misparBank: string, misparSnif: string, misparCheshbon: string){
        return this.httpClient.request("post", this.urlPrefix + '/matbea/shofar/V1/cheshbonot/' + misparProyectSagur + '/' + misparBank + '/' + misparSnif + '/' + misparCheshbon + '/add', { headers: this.getHeader(), params: {'misparProyectSagur': misparProyectSagur, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    }

    public isShofarAdmin(){
      return this.httpClient.request("get", this.urlPrefix + '/shofar/isAdmin', { headers: this.getHeader(), params: {} });
    }

    public getUserDetails(){
      return this.httpClient.request("get", this.urlPrefix + '/matbea/common/v1/user/details', { headers: this.getHeader(), params: {} });
    }
    public getNatuneyMashkanta(misparProject: string){
        return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/project/' + misparProject + '/mashkanta', { headers: this.getHeader(), params: { misparProject }});
    }
    public setNatuneyMashkanta(mashkantaData: saveMskDataType){
      return this.httpClient.request("post", this.urlPrefix + '/matbea/shofar/V1/project/mashkanta/save', { headers: this.getHeader(), params: { mashkantaData: JSON.stringify(mashkantaData) }});
    }
    public getReshimatKablanim(misparProject: string){
      return this.httpClient.request("get", this.urlPrefix +  '/matbea/shofar/V1/project/' + misparProject + '/kablanim', { headers: this.getHeader(), params: { misparProject }});
    }
    public getNatuneyAmalot(misparProject: string){
      return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/project/' + misparProject + '/amalot', {headers: this.getHeader(), params: { misparProject }});
    }
    public saveAmalot(amalotData: AmalotDataType){
      return this.httpClient.request("post", this.urlPrefix +  '/matbea/shofar/V1/project/amalot/save', {headers: this.getHeader(), params: { amalot: JSON.stringify(amalotData) }});
    }

    getColumnDefinitions():Observable<any> {
        this.params = new HttpParams().append('taskId', 'SHOFAR').append('subTaskId', 'PROJECTS_LIST');
       return this.httpService.getRequest( this.urlPrefix +   '/matbea/common/v1/tables/columns/SHOFAR/PROJECTS_LIST/filter/user',this.params).pipe(
         map(res=>{
           return (res.data )//.sqlResult;//as SqlResult home
         })
       )
      }

      getProjectList():Observable<any>{
        let inputParams: Avcmp01m = new Avcmp01m();
        let params = JSON.stringify({ inputParams });
        this.params= new HttpParams().append('avcmp01m', params)

        return this.httpService.getRequest( this.urlPrefix +  '/matbea/shofar/V1/projects/list',this.params).pipe(
          map(res=>{
            let messages=[];
            if(res.messages?.global.errors){
              res.messages?.global.errors.forEach((mes=>{
                messages.push(mes.message)
              }))
            }
            return {data:res.data, messages: messages};
          })
        )

      }
      getShlavim(misparProyectSagur): Observable<any> {
        return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/V1/project/' + misparProyectSagur + '/steps').pipe( map((res:{data:any})=>{
          return res.data.reshimatShlavimList;
        }))
      }
      getGushChelka(){
        return this.httpClient.request("get", this.urlPrefix + '/matbea/shofar/projects/v1/shlav/yechida/215/1/0');
      }
      getProjectsListWithHierarhia(object){
        let params= new HttpParams();
        params= params.append('hativa', object.hativa?object.hativa:'3');
        params= params.append('agaf', object.agaf?object.agaf:'');
        params= params.append('sektor', object.sektor?object.sektor:'');
        params= params.append('makal', object.makal?object.makal:'');
        params= params.append('status', object.status?object.status:'4');
        return this.httpService.getRequest( this.urlPrefix +  '/matbea/shofar/V1/projects/search/byIherarhia', params).pipe(
            map(res=>{
              let messages=[];
              if(res.messages?.global.errors){
                res.messages?.global.errors.forEach((mes=>{
                  messages.push(mes.message)
                }))
              }
            return {data:res.data, messages: messages};
          })
        )
      }

      getProjectListByProjectFacts(findObject:{[k:string]:string|number}):Observable<any>{
     let keys=Object.keys(findObject);
        let params= new HttpParams()
        keys.forEach((k)=>{
           params= params.append(k, findObject[k].toString())
        })

        return this.httpService.getRequest( this.urlPrefix +  '/matbea/shofar/V1/projects/search/byPeilut',params).pipe(
          map(res=>{
            let messages=[];
            if(res.messages?.global.errors){
              res.messages?.global.errors.forEach((mes=>{
                messages.push(mes.message)
              }))
            }
            return {data:res.data, messages: messages};
          })
        )

      }
    updateColumnDefinitions(columnsDefenitions: ColumnDefinition[]):Observable<any>{
      let res:{[name: string]:string}={};
      columnsDefenitions.filter((col:ColumnDefinition)=> col.display=="1").map((col)=>{
        const colName = col.columnnameenglish.toString();
        const colOrder=col.ordernumber.toString();
        res[colName]=colOrder;
        return ;
      });
     
      return this.httpService.putRequest( this.urlPrefix +  '/matbea/shofar/v1/tables/columns/update',res);
    }

      getProjectByMisparProject(wizardData: CreateProjectWizardData):Observable<any>{
        this.params= new HttpParams().append('wizardData', JSON.stringify(wizardData))
        return this.httpService.getRequest( this.urlPrefix +   '/matbea/shofar/V1/project/filter/' + wizardData.misparProyectSagur,this.params).pipe(
          map(res=>{
            return res.data;
          })
        )

      }


      addNewProject(project: Project):Observable<any>{
        this.params= new HttpParams().append('wizardData', JSON.stringify(project))
        return this.httpService.getRequest( this.urlPrefix +  '/matbea/shofar/V1/project/filter/' +  + project.misparProyectSagur,this.params).pipe(
          map(res=>{
            return res.data;
          })
        )
      }
      getComboStatusToProjectsListPage():Observable<any>{
        return this.httpService.getRequest( this.urlPrefix +   '/matbea/shofar/V1/projects/filters').pipe(
          tap((v)=>{
            console.log("getComboStatusToProjectsListPage",v)
          }),
          map(res=>res.data.projectStatusCombo),
          take(1)
        )
      }



    getHeader(): HttpHeaders{
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');

        return headers;
    }
}





let h = {
  "metadata": { "validations": {} }, "data": {
    "reshimatShlavimList": [
      { "misparTavla": "1", "misparShura": "1", "misparShlav": "1", "teurHaShlav": "א", "metegHeterBniya": "1", "taarich8HeterBniya": "20100715", "taarich8SiyumTzafui": "20120630", "teurYeudShlav": "מגורים", "misparYechidotBeSlv": "8", "shemGoremMemamen": null }]
  }
}


let r = {
  "data":
  {
    "avcmp07m":
    {
      "mtgHatamatSchumArvut": 0,
      "metegPakadSamenHakol": 0,
      "metegPakadHaba": 0,
      "taarich8Rishum": 0,
      "shiurHncaAmalatTipul": 0.0,
      "misparShlav": 1,
      "tar8ProtokolMesira": 0,
      "mtgMakorTmuraMechira": 0,
      "misparYechidotBeSlv": 8,
      "kodBaalutKarka": 0,
      "mtgPakadHafekPinkas": 0,
      "mprYechidaBaProyect": 1,
      "kamutTnuot": 0,
      "mtgPakadHosefYechida": 0,
      "metegChiyuvMaam": 0,
      "mtgPkdBitzuaArvut": 0,
      "misparZihuyMetapel": null,
      "misparProyectSagur": 215,
      "indMursheTipul": 0,
      "shiurAmlArvDiraOcls": 0.0,
      "taarich8Yaad": 0,
      "sugPeulaIdkun": 0,
      "kodMishtamesh": null
    },
    "trctlshgList": [],
    "returnCode": {},
    "applicationState": { "invocationName": { "bytes": {} } },
    "replyTimestamp":
    {
      "date": {}, "hours": {}, "seconds": {}, "month": {}, "year": {}, "timezoneOffset": {}, "minutes": {}, "time": {}, "day": {}
    }, "messages": [], "avctl071List": { "fullList": [
      { "schumTashlumim": 6837106.1, "metegPakadGushChelka": 0, "mtgHatamatSchumArvut": 0, "kamutPinkasimMuzmenet": 8, "teurYechidaMeforat": null, "shuratMelel180": null, "kodStatusBitulArvut": 0, "misparTavla": 0, "sugReshuma": -999, "teurYechida": null, "teurStatusArvut": null, "misparTshBeNigreret": 44, "schumChoze": 5803451.0, "misparArvuyot": 44, "taarich8HaChoze": 0, "schumBeFoal": 6732000.0, "statusShinuy": 0, "shemLakoachKolel": null, "kamutArvutLeloKfilut": 44, "teurChelka": null, "teurStsHazmanatPnk": null, "misparGush": 0, "mtgMakorTmuraMechira": 0, "misparShura": 0, "misparZihuyLakoach": null, "erechShoviDoch0": 5655176.0, "schumArvuyot": 6837106.0, "mprYechidaBaProyect": 0, "misparTashlumim": 44, "teurStatusBitzua": null }, { "schumTashlumim": 862776.29, "metegPakadGushChelka": 0, "mtgHatamatSchumArvut": 0, "kamutPinkasimMuzmenet": 1, "teurYechidaMeforat": "יח\"ד מס' 9", "shuratMelel180": "שצ'וגול איליה               317287225,\n                    שצ'וגול סבטלנה              317257798", "kodStatusBitulArvut": 0, "misparTavla": 0, "sugReshuma": 0, "teurYechida": "9", "teurStatusArvut": null, "misparTshBeNigreret": 8, "schumChoze": 732759.0, "misparArvuyot": 8, "taarich8HaChoze": 20101221, "schumBeFoal": 850000.0, "statusShinuy": 0, "shemLakoachKolel": null, "kamutArvutLeloKfilut": 8, "teurChelka": "22", "teurStsHazmanatPnk": "נמסר", "misparGush": 17820, "mtgMakorTmuraMechira": 0, "misparShura": 0, "misparZihuyLakoach": null, "erechShoviDoch0": 706897.0, "schumArvuyot": 862777.0, "mprYechidaBaProyect": 1, "misparTashlumim": 8, "teurStatusBitzua": null },
 ] },
             "optionsLists": {}
  }, "messages": []
}