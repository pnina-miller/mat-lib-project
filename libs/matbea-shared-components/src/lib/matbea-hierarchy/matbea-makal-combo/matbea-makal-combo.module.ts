import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaMakalComboComponent } from './matbea-makal-combo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatbeaHierarchyGeneralComboModule } from '../matbea-hierarchy-general-combo/matbea-hierarchy-general-combo.module';



@NgModule({
  declarations: [MatbeaMakalComboComponent],
  imports: [
    CommonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    MatbeaHierarchyGeneralComboModule
  ],
  exports: [MatbeaMakalComboComponent]
})
export class MatbeaMakalComboModule { }
