import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { ColumnDefinition } from 'libs/matbea-ui-components/src/lib/models/column-definition.model';
import { RadioButtonTabEntry } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.component';
import * as ProjectDetailsSelectors from '../../store/selectors/project-details.selectors';
import {StateProjectDetails} from "../../store/state/project-details.state";

const UNIT_COLUMNS =[{ordernumber:'1', columnnamehebrew:"מס' יחידה", columnformatter:' ', display:'1', columnnameenglish:'misparShura', removable: 'false'} ,
{ordernumber:'2', columnnamehebrew:"שמות הרוכשים", columnformatter:' ', display:'1', columnnameenglish:'shemLakoachKolel', removable: 'false'} ,
{ordernumber:'3', columnnamehebrew:"זיהוי יחידה", columnformatter:' ', display:'1', columnnameenglish:'shuratMelel180', removable: 'false'} ,
{ordernumber:'5', columnnamehebrew:"גוש", columnformatter:' ', display:'1', columnnameenglish:'misparGush', removable: 'false'},
{ordernumber:'6', columnnamehebrew:"חלקה/ות", columnformatter:' ', display:'1', columnnameenglish:'metegPakadGushChelka', removable: 'false'},]

@Component({
  selector: 'matbea-hazmanat-pinkasim',
  templateUrl: './hazmanat-pinkasim.component.html',
  styleUrls: ['./hazmanat-pinkasim.component.scss']
})
export class HazmanatPinkasimComponent implements OnInit {

  project: any;
  project$ = this.store$.select(ProjectDetailsSelectors.getProject);
  selectedRows:number[];
  units: any;
  displayedColumns:ColumnDefinition[]=UNIT_COLUMNS as ColumnDefinition[];
  sendDataList:RadioButtonTabEntry[]=[{id:'1',description:'סניף מנהל'},{id:'1',description:'מק"ל'},{id:'1',description:'נא"ש'}];
  send=''
  constructor( public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {selectedRows:number[]}, private store$: Store<StateProjectDetails>) { 
      this.selectedRows=data.selectedRows;
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
    this.dialogRef.close();

  }
}