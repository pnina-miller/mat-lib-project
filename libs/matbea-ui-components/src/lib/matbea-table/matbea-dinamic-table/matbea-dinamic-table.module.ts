import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaDinamicTableComponent } from './matbea-dinamic-table.component';
import {MatCardModule} from '@angular/material/card';
import { DynamicMatTableModule } from 'dynamic-mat-table';

@NgModule({
  declarations: [
    MatbeaDinamicTableComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    DynamicMatTableModule
  ],
  exports: [MatbeaDinamicTableComponent]
})
export class MatbeaDinamicTableModule { }
