import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaComboComponent } from './matbea-combo.component';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatbeaIconButtonModule } from '../../matbea-icon-button/matbea-icon-button.module';



@NgModule({
  declarations: [
    MatbeaComboComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatbeaIconButtonModule
  ],
  exports: [
    MatbeaComboComponent
  ]
})
export class MatbeaComboModule { }
