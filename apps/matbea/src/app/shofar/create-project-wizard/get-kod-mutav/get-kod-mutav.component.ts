import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { ShofarServices } from '../../services/shofar-services'
import { ErrorStateMatcher } from '@angular/material/core';
import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CreateProjectWizardData } from '../create-project-wizard-common/create-project-wizard-data';
import { MatStepper } from '@angular/material/stepper';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateProjectWizardButtonComponent } from '../create-project-wizard-button/create-project-wizard-button.component';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';


@Component({
  selector: 'matbea-get-kod-mutav',
  templateUrl: './get-kod-mutav.component.html',
  styleUrls: ['./get-kod-mutav.component.scss', '../create-project-wizard-common/create-project-wizard-common-styles.css']
})
export class GetKodMutavComponent implements OnInit {  
  kodMutavFormGroup: FormGroup;
  data: Avcmp02m;
  errorMsg = '';

  @Input('wizardData')wizardData: CreateProjectWizardData;
  @Input('wizardStepper')wizardStepper: MatStepper;
  @Input('dialogRef')dialogRef: MatDialogRef<CreateProjectWizardButtonComponent>;
  @ViewChild('stepper', { static: false }) stepper: MatStepper;


  constructor(private http: HttpClient, private shofarServices: ShofarServices, private _formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.kodMutavFormGroup = this._formBuilder.group({
      kodMutavCtrl: ['', Validators.required]
    });
  }


  public next(): void{            
    this.shofarServices.getKodMutva(this.wizardData.kodMutavBeShovar).subscribe(resp => {      
      console.log("---> Data of MatbeaHierarchyComboGetAgapimList"); 
      let generalResponse = resp as GeneralResponse;
      let avcmp02m = (generalResponse.data as KodMutavResponse).avcmp02m
      this.wizardData.kodMutavBeShovar = avcmp02m.kodMutavBeShovar;      
      console.log(generalResponse);

      if(generalResponse.messages != null && generalResponse.messages.global.errors.length > 0){
        this.errorMsg = generalResponse.messages.global.errors[0].message;
        this.wizardStepper.selectedIndex = 0;
      }else{
        this.wizardData.kodMutavBeShovar = avcmp02m.kodMutavBeShovar;
        this.wizardData.misparBank = avcmp02m.misparBank;
        this.wizardData.misparSnif = avcmp02m.misparSnif;
        this.wizardData.misparCheshbon = avcmp02m.misparCheshbon;        
        this.wizardData.shemCheshbon = avcmp02m.shemCheshbon;        
        this.wizardStepper.linear = false;
       
        this.wizardStepper.selectedIndex = 1;
        
      }

      
    },
    (error) => {                              //Error callback
      console.error('error caught in component' + error)
    })
  }

  
  
  public cancel(): void{
    this.dialogRef.close();
  }

}




export interface KodMutavResponse{
  avcmp02m: Avcmp02m;
}

export interface Avcmp02m{
  kodMutavBeShovar: string;
  misparBank: number;
  misparSnif: number;
  misparCheshbon: number;
  shemCheshbon: string;
}