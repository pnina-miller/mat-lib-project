import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBasicDetailsComponent } from './project-basic-details.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {
  MatbeaButtonToggleModule,
  MatbeaCheckboxModule,
  MatbeaComboModule,
  MatbeaInputModule
} from "@pdesks/matbea-ui-components";
import { RadioButtonTabModule } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.module';
import { MatbeaInputCitiesModule } from 'libs/matbea-shared-components/src/lib/matbea-input-cities/matbea-input-cities.module';


@NgModule({
  declarations: [ProjectBasicDetailsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule ,

    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatAutocompleteModule,
    MatbeaComboModule,
    //RadioButtonTabModule,
    MatbeaInputCitiesModule,
    MatbeaCheckboxModule,
    MatbeaInputModule,
    MatbeaButtonToggleModule
  ],
  exports: [ProjectBasicDetailsComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class ProjectBasicDetailsModule { }
