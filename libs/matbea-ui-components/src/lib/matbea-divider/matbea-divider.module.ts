import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaDividerComponent } from './matbea-divider.component';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [
    MatbeaDividerComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ],
  exports: [
    MatbeaDividerComponent
  ]
})
export class MatbeaDividerModule { }
