import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetuneyAmalotComponent } from './netuney-amalot.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RadioButtonTabModule } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.module';
import { MatbeaInputModule } from "@pdesks/matbea-ui-components";
import { MatbeaButtonModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import { MatbeaDividerModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-divider/matbea-divider.module';


@NgModule({
  declarations: [NetuneyAmalotComponent],
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
    MatbeaInputModule,
    MatbeaButtonModule,
    MatbeaDividerModule,
  ],
  exports:[ NetuneyAmalotComponent ]
})
export class NetuneyAmalotModule { }
