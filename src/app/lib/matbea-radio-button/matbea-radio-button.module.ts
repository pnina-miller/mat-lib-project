import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaRadioButtonComponent } from './matbea-radio-button.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [
    MatbeaRadioButtonComponent
  ],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports: [
    MatbeaRadioButtonComponent
  ]
})
export class MatbeaRadioButtonModule { }
