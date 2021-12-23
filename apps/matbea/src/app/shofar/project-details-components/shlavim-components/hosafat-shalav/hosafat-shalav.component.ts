import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';
import { ShofarServices } from '../../../services/shofar-services';


@Component({
  selector: 'matbea-hosafat-shalav',
  templateUrl: './hosafat-shalav.component.html',
  styleUrls: ['./hosafat-shalav.component.scss']
})
export class HosafatShalavComponent implements OnInit {

  levelId: string = '';
  endDate: Date;
  lastDate: Date;
  heiter: boolean;
  target: any[] = [];
  misparProject: string;
  misparBank: string;

  // errorMsg: string;
showSuccess=false;

  constructor(private shofarServices: ShofarServices,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {

    let inputParams = this.data as HosafatCheshbonInputParams;
    this.misparProject = inputParams.misparProyectSagur;
    this.misparBank = inputParams.misparBank;
  }

  ngOnInit(): void {
  }


  targetChanged(num: number) {
    this.target.push(num)
  }

  cancel() {
    this.dialogRef.close();

  }


  save() {
    /*this.shofarServices.hosefShalav().subscribe(resp => {      
      let generalResponse = resp as GeneralResponse;
     
      if(generalResponse.messages != null && generalResponse.messages.global.fyi.length > 0){
        this.errorMsg = generalResponse.messages.global.fyi[0].message;   
      }else{
        this.dialogRef.close();      
      }

      
    },
    (error) => {                              //Error callback
      console.error('error caught in component' + error)
    })*/
    this.dialogRef.updateSize('50%','30%')
    this.showSuccess=true;
  }

  addUnits(){
    this.dialogRef.close();
  }
}

interface HosafatCheshbonInputParams {
  misparBank: string;
  misparProyectSagur: string;

}