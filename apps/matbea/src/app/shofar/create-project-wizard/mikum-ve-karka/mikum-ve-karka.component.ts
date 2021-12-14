import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../services/shofar-services';
import { WizardComboboxesResponse, CreateProjectWizardData } from '../create-project-wizard-common/create-project-wizard-data';
import { MatStepper } from '@angular/material/stepper';

import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { GeneralComboEntry } from '../../../../../../../libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-general-combo/general-combo-interface';



@Component({
  selector: 'matbea-mikum-ve-karka',
  templateUrl: './mikum-ve-karka.component.html',
  styleUrls: ['./mikum-ve-karka.component.scss', '../create-project-wizard-common/create-project-wizard-common-styles.css']
})
export class MikumVeKarkaComponent implements OnInit {
  @Input('wizardData')wizardData: CreateProjectWizardData;
  @Input('wizardStepper')wizardStepper: MatStepper;
  
  ezorComboBox: GeneralComboEntry[];  
  karkaComboBox: GeneralComboEntry[];
  
  errorMsg: string = "";
  
  

  constructor(private http: HttpClient, private shofarServices: ShofarServices) { }

  ngOnInit(): void {
    this.getComboboxes();
    

   
  }



  public getComboboxes(): void{            
    this.shofarServices.getCreateProjectWizardComboboxes().subscribe(resp => {            
        let generalResponse = resp as GeneralResponse;
        this.ezorComboBox = (generalResponse.data  as WizardComboboxesResponse).ezorComboBox;
        this.karkaComboBox = (generalResponse.data  as WizardComboboxesResponse).karkaComboBox;
    });
  }



  selectYehudaVeShomronChk(select: boolean){
    if(select){
      this.wizardData.metegGarBaEzor = 1;
    }else{
      this.wizardData.metegGarBaEzor = 0;
    }
  }

  selectedKarkaChanged($event){
    this.wizardData.kodBaalutKarka = $event;
  }


  validateMikumVeKarkaForm(): boolean{
    this.errorMsg = "";

    if(this.isComboValueEmpty(this.wizardData.misparEzor)){
      this.errorMsg = "*שדה איזור הוא שדה חובה";
      return false;
    }else if(this.isEmpty(this.wizardData.teurShemYishuvCds, true)){
      this.errorMsg = "*שדה שם ישוב הוא שדה חובה";
      return false;
    }else if(this.isEmpty(this.wizardData.kodBaalutKarka, false)){
      this.errorMsg = "*שדה קרקע הוא שדה חובה";
      return false;
    }


    return true;
  }


  next(): void{
    if(this.validateMikumVeKarkaForm()){
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
