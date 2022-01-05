import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HosafatYechidaComponent } from './hosafat-yechida.component';
import { MatbeaButtonModule, MatbeaFormFieldModule, MatbeaIconButtonModule, MatbeaInputModule, RadioButtonTabModule } from '@pdesks/matbea-ui-components';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HosafatYechidaComponent],
  imports: [
    CommonModule,
    MatbeaButtonModule,
    MatFormFieldModule,
    RadioButtonTabModule,
    MatbeaFormFieldModule,
    MatbeaInputModule,
    ReactiveFormsModule,
    MatbeaIconButtonModule
  ]
})
export class HosafatYechidaModule { }
