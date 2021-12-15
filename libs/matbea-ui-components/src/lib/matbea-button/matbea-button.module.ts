import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaButtonComponent } from './matbea-button.component';
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    MatbeaButtonComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule

  ],
  exports:[
    MatbeaButtonComponent,
  ]
})
export class MatbeaButtonModule { }
