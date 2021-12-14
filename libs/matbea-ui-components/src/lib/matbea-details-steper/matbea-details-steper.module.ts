import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaDetailsSteperComponent } from './matbea-details-steper.component';
import {MatbeaIconModule} from "../matbea-icon/matbea-icon.module";



@NgModule({
  declarations: [
    MatbeaDetailsSteperComponent
  ],
  imports: [
    CommonModule,
    MatbeaIconModule
  ],
  exports:[
    MatbeaDetailsSteperComponent
  ]
})
export class MatbeaDetailsSteperModule { }
