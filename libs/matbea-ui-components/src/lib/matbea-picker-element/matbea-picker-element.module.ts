import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatbeaIconButtonModule } from '../matbea-icon-button/matbea-icon-button.module';
import { MatbeaPickerElementComponent } from './matbea-picker-element.component';



@NgModule({
  declarations: [
    MatbeaPickerElementComponent
    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatbeaIconButtonModule,
    MatCardModule,
  ],
  exports:[
    // MatIconModule,
    // MatbeaIconButtonModule,
    MatbeaPickerElementComponent,
    // MatCardModule
  ]
})
export class MatbeaPickerElementModule { }
