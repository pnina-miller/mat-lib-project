import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragPageComponent } from './drag-page.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {MatbeaIconModule, MatbeaInputModule} from "../index";



@NgModule({
  declarations: [
    DragPageComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatbeaInputModule,
    MatbeaIconModule
  ],
  exports:[
    DragPageComponent
  ]
})
export class DragPageModule { }
