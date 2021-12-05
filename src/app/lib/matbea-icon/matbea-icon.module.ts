import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaIconComponent } from './matbea-icon.component';
import {MatIconModule} from "@angular/material/icon";



@NgModule({
  declarations: [
    MatbeaIconComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    MatbeaIconComponent
  ]
})
export class MatbeaIconModule { }
