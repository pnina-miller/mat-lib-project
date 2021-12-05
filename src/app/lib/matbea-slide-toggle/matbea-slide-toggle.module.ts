import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaSlideToggleComponent } from './matbea-slide-toggle.component';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";



@NgModule({
  declarations: [
    MatbeaSlideToggleComponent
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule
  ],
  exports:[
    MatbeaSlideToggleComponent
  ]
})
export class MatbeaSlideToggleModule { }
