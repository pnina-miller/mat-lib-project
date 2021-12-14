import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectWizardHeaderComponent } from './create-project-wizard-header.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatbeaDividerModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-divider/matbea-divider.module';
import { MatbeaButtonModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';


@NgModule({
  declarations: [CreateProjectWizardHeaderComponent],
  imports: [    
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,
    ReactiveFormsModule ,
    // BrowserAnimationsModule,
    FormsModule,
    MatbeaDividerModule,
    MatbeaButtonModule,
  ],
  exports: [CreateProjectWizardHeaderComponent]
})
export class CreateProjectWizardHeaderModule { }
