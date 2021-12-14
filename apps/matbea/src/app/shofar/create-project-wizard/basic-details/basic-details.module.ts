import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDetailsComponent } from './basic-details.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RadioButtonTabModule } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.module';
import { MatbeaComboModule, MatbeaInputModule, MatbeaCheckboxModule } from "@pdesks/matbea-ui-components";
import { MatbeaButtonModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import { MatbeaDividerModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-divider/matbea-divider.module';


@NgModule({
  declarations: [BasicDetailsComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule ,
    // BrowserAnimationsModule,
    RadioButtonTabModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatbeaComboModule,
    MatbeaInputModule,
    MatbeaCheckboxModule,
    MatbeaButtonModule,
    MatbeaDividerModule,
  ],
  exports: [ BasicDetailsComponent ]
})
export class BasicDetailsModule { }
