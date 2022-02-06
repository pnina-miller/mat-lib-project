import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HosafatYechidaComponent } from './hosafat-yechida.component';
import { MatbeaButtonModule, MatbeaDividerModule, MatbeaFormFieldModule, MatbeaIconButtonModule, MatbeaIconModule, MatbeaInputModule, MatbeaTableModule, RadioButtonTabModule } from '@pdesks/matbea-ui-components';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';



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
    MatbeaIconButtonModule,
    MatbeaTableModule,
    MatbeaIconModule,
    MatIconModule,
    MatbeaDividerModule
  ]
})
export class HosafatYechidaModule { }
