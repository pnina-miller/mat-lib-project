import { Component, OnInit, Output, Inject, ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { HttpClient } from '@angular/common/http';
import { CreateProjectWizardData } from '../create-project-wizard-common/create-project-wizard-data';
import { ShofarServices } from '../../services/shofar-services';
import { Store } from '@ngrx/store';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CreateProjectWizardButtonComponent } from '../create-project-wizard-button/create-project-wizard-button.component';
import { Project } from '../../store/models/project.model';
import { GetKodMutavComponent } from '../get-kod-mutav/get-kod-mutav.component';


@Component({
  selector: 'matbea-create-project-wizard-stepper',
  templateUrl: './create-project-wizard-stepper.component.html',
  styleUrls: ['./create-project-wizard-stepper.component.scss', '../create-project-wizard-common/create-project-wizard-common-styles.css']
})
export class CreateProjectWizardStepperComponent implements OnInit {
  @ViewChild(GetKodMutavComponent) kodMutavCmp: GetKodMutavComponent;
  wizardData: CreateProjectWizardData = new CreateProjectWizardData();

  isLinear = true;
  kodMutavGroup: FormGroup;
  basicDetailsFormGroup: FormGroup;
  mikumVeKarkaFormGroup: FormGroup;
  netuneyAmalotFormGroup: FormGroup;

  newProject: Project;
  selectedIndex = 0;
  

  constructor(private http: HttpClient, private shofarServices: ShofarServices, private _formBuilder: FormBuilder, private store$: Store,
    public dialogRef: MatDialogRef<CreateProjectWizardButtonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) {}

  ngOnInit() {
    this.kodMutavGroup = this._formBuilder.group({
      kodMutavCtrl: ['', Validators.required]
    });
    
    this.basicDetailsFormGroup = this._formBuilder.group({
      basicDetailsCtrl: ['', Validators.required]
    });

    this.mikumVeKarkaFormGroup = this._formBuilder.group({
      mikumVeKarkaCtrl: ['', Validators.required]
    });

    this.netuneyAmalotFormGroup = this._formBuilder.group({
      netuneyAmalotFormCtrl: ['', Validators.required]
    });
  }


 



  onSelectionChange(event: StepperSelectionEvent) {
    console.log('prev: ', event.previouslySelectedIndex);
    console.log('next: ', event.selectedIndex);
    
   // if(this.wizardData.kodMutavBeShovar == '0' || this.wizardData.kodMutavBeShovar == ''){
    //  this.selectedIndex = 0;
   // }

    //if(event.previouslySelectedIndex == 0){
    //  this.kodMutavCmp.next();
    //}
}





  

}