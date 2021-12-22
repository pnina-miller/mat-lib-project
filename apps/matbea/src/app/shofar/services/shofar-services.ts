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
import { ProjectDetailsData } from "../project-details-components/project-basic-details-components/project-basic-details/project-basic-details.component";

@Injectable({
    providedIn: 'root',
  })
export class ShofarServices{
    params: HttpParams;
    urlPrefix: string = MatbeaUtils.getServicePrefix();

    constructor(private httpClient: HttpClient, private httpService: HttpService) { }

    public getKodMutva(kodMutav: string){
        return this.httpClient.request("get", this.urlPrefix + '/shofar/pirteyProject/get', { headers: this.getHeader(), params: {'kodMutavBeShovar': kodMutav} });
    }

    public getPirteyProject(kodMutav: string, misparProyectSagur: string){//this
        return this.httpClient.request("get", this.urlPrefix + '/shofar/pirteyProject/get', { headers: this.getHeader(), params: {'kodMutavBeShovar': kodMutav, 'misparProyectSagur': misparProyectSagur} });
    }

    public savePirteyProject(projectDetailsData: ProjectDetailsData){
      return this.httpClient.request("get", this.urlPrefix + '/shofar/projectDetails/save', { headers: this.getHeader(), params: {'projectDetailsData': JSON.stringify(projectDetailsData)} });
  }

    public getCreateProjectWizardComboboxes(){
        return this.httpClient.request("get", this.urlPrefix + '/shofar/createProjectWizard/comboboxes', { headers: this.getHeader(), params: {} });
    }

    public getCitiesList(){
      return this.httpClient.request("get", this.urlPrefix + '/common/cities/get', { headers: this.getHeader(), params: {} });
    }
    

    public saveNewProject(wizardData: CreateProjectWizardData){
        return this.httpClient.request("get", this.urlPrefix + '/shofar/createProjectWizard/save', { headers: this.getHeader(), params: {'projectDetailsData': JSON.stringify(wizardData)} });
    }

    public getCheshbonotProject(misparProyectSagur: string){
        return this.httpClient.request("get", this.urlPrefix + '/shofar/chshbonotproject/get', { headers: this.getHeader(), params: {'misparProyectSagur': misparProyectSagur} });
    }

    public removeCheshbon(misparProyectSagur: string, misparBank: string, misparSnif: string, misparCheshbon: string){
        return this.httpClient.request("get", this.urlPrefix + '/shofar/chshbonotproject/remove', { headers: this.getHeader(), params: {'misparProyectSagur': misparProyectSagur, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    }

  getShlavim(misparProyectSagur: string) {
    return this.httpClient.request("get", this.urlPrefix + '/shofar/shlavim/get', { headers: this.getHeader(), params: {'kodMutavBeShovar': 'kodMutav'} });
  }

  getpirteyShalav(misparShalv:number) {
    return this.httpClient.request("get", this.urlPrefix + '/shofar/projects/'+misparShalv+'/shlavim', { headers: this.getHeader(), params: {'kodMutavBeShovar': 'kodMutav'} });
  }
  
  getyechidot(misparShalv:number) {
    return this.httpClient.request("get", this.urlPrefix + '/shofar/projects/v1/steps/appartments/'+misparShalv+'/1/1', { headers: this.getHeader() });
  }
    public hagderKeArvut(misparProyectSagur: string, misparBank: string, misparSnif: string, misparCheshbon: string){
        return this.httpClient.request("get", this.urlPrefix + '/shofar/chshbonotproject/hagderKeArvut', { headers: this.getHeader(), params: {'misparProyectSagur': misparProyectSagur, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    }

    public getPirteyCheshbon(misparProject: string, misparBank: string, misparSnif: string, misparCheshbon: string){
        return this.httpClient.request("get", this.urlPrefix + '/shofar/cheshbonot/getPirteyCheshbon', { headers: this.getHeader(), params: {'misparProyectSagur': misparProject, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    }

    public hosefCheshbon(misparProject: string, misparBank: string, misparSnif: string, misparCheshbon: string){
        return this.httpClient.request("get", this.urlPrefix + '/shofar/cheshbonot/add', { headers: this.getHeader(), params: {'misparProyectSagur': misparProject, 'misparBank': misparBank, 'misparSnif': misparSnif, 'misparCheshbon': misparCheshbon} });
    }

    public isShofarAdmin(){
      return this.httpClient.request("get", this.urlPrefix + '/shofar/isAdmin', { headers: this.getHeader(), params: {} });
    }

    public getUserDetails(){
      return this.httpClient.request("get", this.urlPrefix + '/user/get', { headers: this.getHeader(), params: {} });
    }
    public getNatuneyMashkanta(misparProject: string){
        return this.httpClient.request("get", this.urlPrefix +'/shofar/natuney-mashkanta', { headers: this.getHeader(), params: { misparProject }});
    }
    public setNatuneyMashkanta(mashkantaData: saveMskDataType){
      return this.httpClient.request("post", this.urlPrefix +'/shofar/mashkanta-save', { headers: this.getHeader(), params: { mashkantaData: JSON.stringify(mashkantaData) }});
    }
    public getReshimatKablanim(misparProject: string){
      return this.httpClient.request("get", this.urlPrefix +'/shofar/kablanim', { headers: this.getHeader(), params: { misparProject }});
    }
    public getNatuneyAmalot(misparProject: string){
      return this.httpClient.request("get",this.urlPrefix + '/shofar/amalot', {headers: this.getHeader(), params: { misparProject }});
    }


    getColumnDefinitions():Observable<any> {
        this.params = new HttpParams().append('taskId', 'SHOFAR').append('subTaskId', 'PROJECTS_LIST');
       return this.httpService.getRequest( '/common/tables/tableColumnsByUser',this.params).pipe(
         map(res=>{
           return res.data;
         })
       )
      }

      getProjectList():Observable<any>{
        let inputParams: Avcmp01m = new Avcmp01m();
        let params = JSON.stringify({ inputParams });
        this.params= new HttpParams().append('avcmp01m', params)

        return this.httpService.getRequest('/shofar/projects',this.params).pipe(
          map(res=>{
            let messages=[];
            if(res.messages?.global.fyi){
              res.messages?.global.fyi.forEach((mes=>{
                messages.push(mes.message)
              }))
            }
            return {data:res.data, messages: messages};
          })
        )

      }
      getProjectsListWithHierarhia(object){
        let params= new HttpParams();
        params= params.append('hativa', object.hativa?object.hativa:'3');
        params= params.append('agaf', object.agaf?object.agaf:'');
        params= params.append('sektor', object.sektor?object.sektor:'');
        params= params.append('makal', object.makal?object.makal:'');
        params= params.append('status', object.status?object.status:'4');
        return this.httpService.getRequest('/shofar/projects/byIherarhia', params).pipe(
            map(res=>{
              let messages=[];
              if(res.messages?.global.fyi){
                res.messages?.global.fyi.forEach((mes=>{
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

        return this.httpService.getRequest('/shofar/projects/byPeilut',params).pipe(
          map(res=>{
            let messages=[];
            if(res.messages?.global.fyi){
              res.messages?.global.fyi.forEach((mes=>{
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
      return this.httpService.putRequest('/shofar/projects/columns/update',res);
    }

      getProjectByMisparProject(wizardData: CreateProjectWizardData):Observable<any>{
        this.params= new HttpParams().append('wizardData', JSON.stringify(wizardData))
        return this.httpService.getRequest( '/shofar/createProjectWizard/getByMisparProject',this.params).pipe(
          map(res=>{
            return res.data;
          })
        )

      }


      addNewProject(project: Project):Observable<any>{
        this.params= new HttpParams().append('wizardData', JSON.stringify(project))
        return this.httpService.getRequest('/shofar/createProjectWizard/getByMisparProject',this.params).pipe(
          map(res=>{
            return res.data;
          })
        )
      }
      getComboStatusToProjectsListPage():Observable<any>{
        return this.httpService.getRequest( '/shofar/combobox').pipe(
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


