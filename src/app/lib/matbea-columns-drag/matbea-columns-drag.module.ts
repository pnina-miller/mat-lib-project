import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MatbeaIconButtonModule } from '../matbea-icon-button/matbea-icon-button.module';
import {MatDividerModule} from '@angular/material/divider';
import { MatbeaPickerElementModule } from '../matbea-picker-element/matbea-picker-element.module';
import { MatbeaColumnsDragComponent } from './matbea-columns-drag.component';

@NgModule({
  declarations: [
    MatbeaColumnsDragComponent
  ],
  imports: [
    CommonModule,
    MatbeaPickerElementModule,
    DragDropModule,
    MatbeaIconButtonModule,
    MatDividerModule

  ],
  exports:[
    MatbeaColumnsDragComponent
  ]
})
export class MatbeaColumnsDragModule { }
