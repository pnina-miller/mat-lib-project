import { Component, OnInit, Input, Inject } from '@angular/core';

import { CreateProjectWizardData } from '../create-project-wizard-common/create-project-wizard-data';
import { MatStepper } from '@angular/material/stepper';
import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../services/shofar-services';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateProjectWizardButtonComponent } from '../create-project-wizard-button/create-project-wizard-button.component';
import { RadioButtonTabEntry } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.component';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { Project } from '../../store/models/project.model';




@Component({
  selector: 'matbea-netuney-amalot',
  templateUrl: './netuney-amalot.component.html',
  styleUrls: ['./netuney-amalot.component.scss', '../create-project-wizard-common/create-project-wizard-common-styles.css']
})
export class NetuneyAmalotComponent implements OnInit {
  @Input('wizardData')wizardData: CreateProjectWizardData;
  @Input('wizardStepper')wizardStepper: MatStepper;
  dmeyTipulButtonsArray: RadioButtonTabEntry[] = [{id: "1", description:"פטור"}, {id: "2", description:"שיעור הנחה"}, {id: "3", description:"סכום בש\"ח"}, {id: "4", description:"תעריפון"}];
  errorMsg: string = "";
  newProject: Project;


  constructor(private http: HttpClient, private shofarServices: ShofarServices, private _formBuilder: FormBuilder, private store$: Store,
    public dialogRef: MatDialogRef<CreateProjectWizardButtonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) { }

  ngOnInit(): void {
  }



  dmeyTipulButtonsChanged($event): void{
    this.wizardData.kodAmala = $event;
  }


  validateNetunetAmalotForm(): boolean{
    this.errorMsg = "";

    if( (this.wizardData.kodAmala == '2' || this.wizardData.kodAmala == '3' ) && (this.wizardData.sachHakolAmalaNeto == undefined ) ){
      this.errorMsg = "*יש להזין שיעור דמי טיפול";
      return false;
    }

    return true;
  }


  next(): void{
    if(this.validateNetunetAmalotForm()){
      this.saveNewProject()
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


  saveNewProject(){
    this.shofarServices.saveNewProject(this.wizardData).subscribe(resp => {
      let generalResponse = resp as GeneralResponse;
      this.newProject = generalResponse.data.project as Project;
      this.newProject.id = this.newProject.misparProyectSagur+'&'+this.newProject.kodMutavBeShovar;
      this.dialogRef.close(this.newProject);
    },
    (error) => {                              //Error callback
      console.error('error caught in component' + error)
    })
  }

}
