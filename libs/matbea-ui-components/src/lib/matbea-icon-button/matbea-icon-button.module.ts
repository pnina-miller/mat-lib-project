import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaIconButtonComponent } from './matbea-icon-button.component';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    MatbeaIconButtonComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports:[
    MatbeaIconButtonComponent,
    // MatButtonModule,
    // MatIconModule
  ]
})
export class MatbeaIconButtonModule { }
