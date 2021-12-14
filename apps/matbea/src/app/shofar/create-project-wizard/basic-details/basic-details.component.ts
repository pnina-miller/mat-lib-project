import { Component, OnInit, Input } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../services/shofar-services';

import { CreateProjectWizardData, WizardComboboxesResponse } from '../create-project-wizard-common/create-project-wizard-data';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

import { RadioButtonTabEntry } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.component';

import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { GeneralComboEntry } from '../../../../../../../libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-general-combo/general-combo-interface';
import { DIVUR_MICHTAV_SHICHRUR_BUTTONS_ARRAY, SHITAT_LIVUY_BUTTONS_ARRAY } from '../../common-components/common-shofar-constants';

@Component({
  selector: 'matbea-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss', '../create-project-wizard-common/create-project-wizard-common-styles.css']
})
export class BasicDetailsComponent implements OnInit {
  @Input('wizardData')wizardData: CreateProjectWizardData;
  @Input('wizardStepper')wizardStepper: MatStepper;
  
  mefakeachComboBox: GeneralComboEntry[];
  shitatLivuyButtonsArray: RadioButtonTabEntry[] = SHITAT_LIVUY_BUTTONS_ARRAY; 
  divurMichtavShichrurButtonsArray: RadioButtonTabEntry[] = DIVUR_MICHTAV_SHICHRUR_BUTTONS_ARRAY; 
  errorMsg: string = "";


  heskemLivuyDateFilter  = (selectedDate: Date | null): boolean => {
    const today = new Date();    
    return selectedDate <= today;
  }

  constructor(private http: HttpClient, private shofarServices: ShofarServices) { 
   

  }

  ngOnInit(): void {
    this.getComboboxes();
  }



  public getComboboxes(): void{            
    this.shofarServices.getCreateProjectWizardComboboxes().subscribe(resp => {      
      console.log("---> Data of MatbeaHierarchyComboGetAgapimList"); 
      let generalResponse = resp as GeneralResponse;
      this.mefakeachComboBox = (generalResponse.data  as WizardComboboxesResponse).mefakeachComboBox;
      
      let defaultValues: CreateProjectWizardData = (generalResponse.data  as WizardComboboxesResponse).defaults;
      this.wizardData.kodChevratDivur = defaultValues.kodChevratDivur;
      this.wizardData.metegChiyuvMaam = defaultValues.metegChiyuvMaam;
    });
  }


  selectedShitatLivuyChanged($event){
    this.wizardData.kodShitatLivuy = $event;
  }

  divurMichtavShichrurChanged($event){
    this.wizardData.kodChevratDivur = $event;   
  }

  selectArvuyotChk(select: boolean){
    if(select){
      this.wizardData.metegChiyuvMaam = 1;
    }else{
      this.wizardData.metegChiyuvMaam = 0;
    }
  }

  selectYokraChk(select: boolean){
    if(select){
      this.wizardData.metegYokra = 1;
    }else{
      this.wizardData.metegYokra = 0;
    }
  }

  selectKvutzatRechishaChk(select: boolean){
    if(select){
      this.wizardData.sugYeshutNhlProyect = 1;
    }else{
      this.wizardData.sugYeshutNhlProyect = 0;
    }
  }

  selectSindicatziaChk(select: boolean){
    if(select){
        this.wizardData.mtgProyectSagurSdct = 1;
    }else{
        this.wizardData.mtgProyectSagurSdct = 0;
    }
  }


  misparEzorChanged($event){
    this.wizardData.misparEzor = $event;
  }

  taarich8HeskemLivuyChanged($event){
    this.wizardData.taarich8HeskemLivuy = $event;
  }



  validateBasicDetailsForm(): boolean{
    this.errorMsg = "";

    if(this.isEmpty(this.wizardData.shemProyectSagur, true)){
      this.errorMsg = "*שדה שם פרוייקט הוא שדה חובה";
      return false;
    }else if(this.isEmpty(this.wizardData.shemProyectSagurAng, true)){
      this.errorMsg = "*שדה שם פרוייקט באנגלית הוא שדה חובה";
      return false;
    }else if(this.isComboValueEmpty(this.wizardData.kodShamaiMefakeach)){
      this.errorMsg = "*שדה שם מפקח הוא שדה חובה";
      return false;
    }else if(this.isEmpty(this.wizardData.kodShitatLivuy, false)){
      this.errorMsg = "*שדה שיטת ליווי הוא שדה חובה";
      return false;
    }else if(this.isEmpty(this.wizardData.kodChevratDivur, false)){
      this.errorMsg = "*שדה דיוור מכתבי שחרור הוא שדה חובה";
      return false;
    }


    return true;
  }


  next(): void{
    if(this.validateBasicDetailsForm()){
      this.wizardStepper.next();
    }
  }

  previouse(): void{
    this.wizardStepper.previous();
  }

  

  isEmpty(value: string, withTRim): boolean{
    if(withTRim){
      return (value == undefined || value.trim() == '')
    }else{
      return (value == undefined || value == '')
    }
  }


  isComboValueEmpty(value: string): boolean{    
    return (value == undefined || value == '' || value == '0')    
  }
  

}


