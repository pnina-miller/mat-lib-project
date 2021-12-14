import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectWizardStepperComponent } from './create-project-wizard-stepper.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule } from '@angular/forms'

import { MatStepperModule } from '@angular/material/stepper';
import { MatIconModule } from '@angular/material/icon';
import { GetKodMutavModule } from '../get-kod-mutav/get-kod-mutav.module';
import { BasicDetailsModule } from '../basic-details/basic-details.module';
import { MikumVeKarkaModule } from '../mikum-ve-karka/mikum-ve-karka.module';
import { NetuneyAmalotModule } from '../netuney-amalot/netuney-amalot.module';
import { MatDialogModule } from '@angular/material/dialog';
// import { CreateProjectWizardStepperRoutingModule } from './create-project-wizard-stepper-routing.module';
import { CreateProjectWizardHeaderModule } from '../create-project-wizard-header/create-project-wizard-header.module';



@NgModule({
  declarations: [CreateProjectWizardStepperComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,
    // BrowserAnimationsModule,   
    ReactiveFormsModule,
    MatStepperModule,
    GetKodMutavModule,
    MikumVeKarkaModule,
    BasicDetailsModule,
    NetuneyAmalotModule,
    MatIconModule,
    MatDialogModule,
    // CreateProjectWizardStepperRoutingModule,
    CreateProjectWizardHeaderModule

  ],

  exports: [CreateProjectWizardStepperComponent]
})
export class CreateProjectWizardStepperModule { }
