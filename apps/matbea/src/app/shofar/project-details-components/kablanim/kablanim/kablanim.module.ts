import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KablanimComponent } from './kablanim.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    KablanimComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [
    KablanimComponent
  ]
})
export class KablanimModule { }
