import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MikumVeKarkaComponent } from './mikum-ve-karka.component'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RadioButtonTabModule } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.module';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatbeaComboModule, MatbeaInputModule, MatbeaCheckboxModule } from "@pdesks/matbea-ui-components";
import { MatbeaButtonModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import { MatbeaDividerModule } from '../../../../../../../libs/matbea-ui-components/src/lib/matbea-divider/matbea-divider.module';
import { MatbeaInputCitiesModule } from '../../../../../../../libs/matbea-shared-components/src/lib/matbea-input-cities/matbea-input-cities.module';


@NgModule({
  declarations: [MikumVeKarkaComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,
    MatCheckboxModule,
    ReactiveFormsModule ,
    RadioButtonTabModule,
    FormsModule,
    MatAutocompleteModule,
    MatbeaComboModule,
    MatbeaInputModule,
    MatbeaCheckboxModule,
    MatbeaButtonModule,
    MatbeaDividerModule,
    MatbeaInputCitiesModule,
  ],
  exports: [MikumVeKarkaComponent,
    //  MatFormFieldModule, 
    //  MatInputModule
    ]
})
export class MikumVeKarkaModule { }
