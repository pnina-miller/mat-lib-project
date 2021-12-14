import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectBasicDetailsComponent } from './project-basic-details.component'
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatbeaComboModule } from "libs/matbea-ui-components/src/lib/drag-page/matbea-combo/matbea-combo.module";
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
    RadioButtonTabModule,
    MatbeaInputCitiesModule,
  ],
  exports: [ProjectBasicDetailsComponent],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class ProjectBasicDetailsModule { }
