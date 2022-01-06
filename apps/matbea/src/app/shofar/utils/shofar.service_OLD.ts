// import { Injectable } from '@angular/core';
// import { HttpService } from './http.service';
// import { HttpParams } from '@angular/common/http';
// import {map, catchError, tap, take} from 'rxjs/operators';
// import { Observable, of } from 'rxjs';
// import { CreateProjectWizardData } from '../create-project-wizard/create-project-wizard-common/create-project-wizard-data';
// import { Project } from '../store/models/project.model';
// import {Avcmp01m} from "./Avcmp01m";
// import { ColumnDefinition } from '../store/models/column-definition.model';
// import { MatbeaUtils } from './matbea-utils-components';



// @Injectable({
//   providedIn: 'root'
// })
// export class ShofarService {
// urlPrefix: string = MatbeaUtils.getServicePrefix();

// params: HttpParams;
//   constructor(private http: HttpService) { }

//   getColumnDefinitions():Observable<any> {
//     this.params = new HttpParams().append('taskId', 'SHOFAR').append('subTaskId', 'PROJECTS_LIST');
//    return this.http.getRequest('/common/tables/tableColumnsByUser',this.params).pipe(
//      map(res=>{
//        return res.data;
//      })
//    )
//   }

//   getProjectList():Observable<any>{
//     let inputParams: Avcmp01m = new Avcmp01m();
//     let params = JSON.stringify({ inputParams });
//     this.params= new HttpParams().append('avcmp01m', params)

//     return this.http.getRequest('/shofar/projects',this.params).pipe(
//       map(res=>{
//         return res.data;
//       })
//     )

//   }

//   getProjectListWithFilter(findObject:{[k:string]:string|number}):Observable<any>{
//  let keys=Object.keys(findObject);
//     let params= new HttpParams()
//     keys.forEach((k)=>{
//        params= params.append(k, findObject[k].toString())
//     })

//     return this.http.getRequest('/shofar/projects/byPeilut',params).pipe(
//       map(res=>{
//         return res.data;
//       })
//     )

//   }
// updateColumnDefinitions(columnsDefenitions: ColumnDefinition[]):Observable<any>{
//   let res:{[name: string]:string}={};
//   columnsDefenitions.filter((col:ColumnDefinition)=> col.display=="1").map((col)=>{
//  const colName = col.columnnameenglish.toString();
//  const colOrder=col.ordernumber.toString();
//  res[colName]=colOrder;
// return ;
// });
//   return this.http.putRequest('/matbea/shofar/v1/tables/columns/update',res);
// }

//   getProjectByMisparProject(wizardData: CreateProjectWizardData):Observable<any>{
//     this.params= new HttpParams().append('wizardData', JSON.stringify(wizardData))
//     return this.http.getRequest( '/shofar/createProjectWizard/getByMisparProject',this.params).pipe(
//       map(res=>{
//         return res.data;
//       })
//     )

//   }


//   addNewProject(project: Project):Observable<any>{
//     this.params= new HttpParams().append('wizardData', JSON.stringify(project))
//     return this.http.getRequest( '/shofar/createProjectWizard/getByMisparProject',this.params).pipe(
//       map(res=>{
//         return res.data;
//       })
//     )
//   }
//   getComboStatusToProjectsListPage():Observable<any>{
//     return this.http.getRequest('/shofar/combobox').pipe(
//       tap((v)=>{
//         console.log("getComboStatusToProjectsListPage",v)
//       }),
//       map(res=>res.data.projectStatusCombo),
//       take(1)
//     )
//   }

// }




