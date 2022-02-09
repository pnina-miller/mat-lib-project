import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { ColumnDefinition } from 'libs/matbea-ui-components/src/lib/models/column-definition.model';
import { RadioButtonTabEntry } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.component';
import { Observable } from 'rxjs';
import { ShofarServices } from '../../services/shofar-services';
import * as ProjectDetailsSelectors from '../../store/selectors/project-details.selectors';
import {StateProjectDetails} from "../../store/state/project-details.state";

const UNIT_COLUMNS =[{ordernumber:'1', columnnamehebrew:"מס' יחידה", columnformatter:' ', display:'1', columnnameenglish:'misparShura', removable: 'false'} ,
{ordernumber:'3', columnnamehebrew:"זיהוי יחידה", columnformatter:' ', display:'1', columnnameenglish:'teurYechidaMeforat', removable: 'false'} ,
{ordernumber:'5', columnnamehebrew:"גוש", columnformatter:' ', display:'1', columnnameenglish:'misparGush', removable: 'false'},
{ordernumber:'6', columnnamehebrew:"חלקה/ות", columnformatter:' ', display:'1', columnnameenglish:'metegPakadGushChelka', removable: 'false'},
{ordernumber:'7', columnnamehebrew:"שמות הרוכשים", columnformatter:' ', display:'1', columnnameenglish:'shemLakoachKolel', removable: 'false'} ,]

@Component({
  selector: 'matbea-hazmanat-pinkasim',
  templateUrl: './hazmanat-pinkasim.component.html',
  styleUrls: ['./hazmanat-pinkasim.component.scss']
})
export class HazmanatPinkasimComponent implements OnInit {

  dataSource$
  project: any;
  project$ = this.store$.select(ProjectDetailsSelectors.getProject);
  selectedRows:number[];
  units: any;
  displayedColumns:ColumnDefinition[]=UNIT_COLUMNS as ColumnDefinition[];
  sendDataList:RadioButtonTabEntry[]=[{id:'1',description:'סניף מנהל'},{id:'2',description:'מק"ל'},{id:'3',description:'נא"ש'}];
  send=''
  successMassage: any;
  errorMsg: string;

  constructor( public dialogRef: MatDialogRef<any>, private shofarServices: ShofarServices,
    @Inject(MAT_DIALOG_DATA) public data: {selectedRows:number[], dataSource$:Observable<any>, misparProyect:string, misparShalav:string}, private store$: Store<StateProjectDetails>) { 
      this.selectedRows=data.selectedRows;
      this.dataSource$= new Observable(subscribe=>{
      data.dataSource$.subscribe(res=>{subscribe.next( res.filter((value, i) => data.selectedRows.includes(i) ) )}) 
      })
    }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.project$.subscribe(
      (project) => {
        if (project) {
          this.project = project;
        }
      },
      (err) => {
        console.log('Project Error',err);
      }
    );
  }

  cancel(){
    this.dialogRef.close();


  }
  save(){
    if(!this.send){
      this.errorMsg='שדה זה הוא חובה'
      return;
    }
    this.shofarServices.savePinkasShovarim(this.data.misparProyect,this.data.misparShalav,this.send).subscribe(
      (resp) => {
        let generalResponse = resp as GeneralResponse;
        if (generalResponse.data.applicationMessage) {
          this.successMassage=generalResponse.data.applicationMessage;
          this.dialogRef.updateSize('50%','30%');
        } else {
this.errorMsg='err'
        }
      },
      (error) => {
        console.error('error caught in component' + error);
      }
    );

  }
}