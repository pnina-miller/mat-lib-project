import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaIconButtonComponent } from './matbea-icon-button.component';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatbeaIconModule} from "../matbea-icon/matbea-icon.module";

@NgModule({
  declarations: [
    MatbeaIconButtonComponent,

  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatbeaIconModule
  ],
  exports:[
    MatbeaIconButtonComponent,
  ]
})
export class MatbeaIconButtonModule { }
