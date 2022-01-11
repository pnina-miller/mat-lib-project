import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { FormGroup } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA, MatDialogTitle } from '@angular/material/dialog';
import { ShofarServices } from '../../../services/shofar-services';
import { shalavDataType } from '../../../shlavim-details/shalav.data';


@Component({
  selector: 'matbea-hosafat-shalav',
  templateUrl: './hosafat-shalav.component.html',
  styleUrls: ['./hosafat-shalav.component.scss']
})
export class HosafatShalavComponent implements OnInit {

  misparSnif: string;
  misparCheshbon: string;
  misparBank: string = '12';
  misparProject: string = '226';

  pirteyCheshbon: PirteyCheshbon;
  bealimLeCheshbonList: BealimLeCheshbon[] = null;
  displayedColumns: string[] = ['shemLakoachKolel', 'misparLakoach'];
  chkChatimatBealimBeCheshbon: boolean = false;

  errorMsg: string = "";
  cheshbonFormGroup: FormGroup;

  constructor(private http: HttpClient, private shofarServices: ShofarServices,
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {

      let inputParams = this.data as HosafatCheshbonInputParams;
      this.misparProject = inputParams.misparProyectSagur;
      this.misparBank = inputParams.misparBank;
     }

  ngOnInit(): void {
    
  }


  getPirteyCheshbon(){
    this.errorMsg = "";
    this.bealimLeCheshbonList = null;

    this.shofarServices.getPirteyCheshbon(this.misparProject, this.misparBank, this.misparSnif, this.misparCheshbon).subscribe(resp => {      
      let generalResponse = resp as GeneralResponse;
     
      if(generalResponse.messages != null && generalResponse.messages.global.errors.length > 0){
        this.errorMsg = generalResponse.messages.global.errors[0].message;       
      }else{
        this.bealimLeCheshbonList = (generalResponse.data as PirteyCheshbonResponse).bealimLeCheshbonList;  
        this.pirteyCheshbon = (generalResponse.data as PirteyCheshbonResponse).pirteyCheshbon;
      }

      
    },
    (error) => {                              //Error callback
      console.error('error caught in component' + error)
    })
  }



  hosafatCheshbon(){
    this.shofarServices.hosefCheshbon(this.misparProject, this.misparBank, this.misparSnif, this.misparCheshbon).subscribe(resp => {      
      let generalResponse = resp as GeneralResponse;
     
      if(generalResponse.messages != null && generalResponse.messages.global.errors.length > 0){
        this.errorMsg = generalResponse.messages.global.errors[0].message;   
      }else{
        this.dialogRef.close();      
      }

      
    },
    (error) => {                              //Error callback
      console.error('error caught in component' + error)
    })
  }


  selectChatimatBealimBeCheshbon($event): void{
    this.chkChatimatBealimBeCheshbon = $event;
  }

}

export interface PirteyCheshbonResponse{
  bealimLeCheshbonList: BealimLeCheshbon[];
  pirteyCheshbon: PirteyCheshbon;
}

export interface BealimLeCheshbon{
  shemLakoachKolel: string
  misparLakoach: string
}

export interface HosafatCheshbonInputParams{
  misparBank: string;
  misparProyectSagur: string;
}

export interface PirteyCheshbon{
  misparCheshbon: string;
  shemCheshbon: string;
}