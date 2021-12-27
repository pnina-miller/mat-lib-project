import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HosafatYechidaComponent } from './hosafat-yechida.component';
import { MatbeaButtonModule, MatbeaFormFieldModule, RadioButtonTabModule } from '@pdesks/matbea-ui-components';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [HosafatYechidaComponent],
  imports: [
    CommonModule,
    MatbeaButtonModule,
    MatFormFieldModule,
    RadioButtonTabModule,
    MatbeaFormFieldModule
  ]
})
export class HosafatYechidaModule { }
