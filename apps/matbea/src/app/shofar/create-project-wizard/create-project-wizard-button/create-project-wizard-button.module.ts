import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectWizardButtonComponent } from './create-project-wizard-button.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateProjectWizardStepperModule } from '../create-project-wizard-stepper/create-project-wizard-stepper.module';
import {MatbeaButtonModule} from "@pdesks/matbea-ui-components";


@NgModule({
  declarations: [CreateProjectWizardButtonComponent ],
  imports: [
    CommonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // TextFieldModule,
    // ReactiveFormsModule ,
    // BrowserAnimationsModule,
    MatDialogModule,
    CreateProjectWizardStepperModule,
    MatbeaButtonModule
  ],
  exports: [CreateProjectWizardButtonComponent,
    // MatFormFieldModule, MatInputModule
   ]
})
export class CreateProjectWizardButtonModule { }
