import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KablanimComponent } from './kablanim.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    KablanimComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    KablanimComponent
  ]
})
export class KablanimModule { }
