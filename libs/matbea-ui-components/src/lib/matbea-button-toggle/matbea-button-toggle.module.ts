import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaButtonToggleComponent } from './matbea-button-toggle.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



@NgModule({
  declarations: [
    MatbeaButtonToggleComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule
  ],
  exports:[
    MatbeaButtonToggleComponent
  ]
})
export class MatbeaButtonToggleModule { }
