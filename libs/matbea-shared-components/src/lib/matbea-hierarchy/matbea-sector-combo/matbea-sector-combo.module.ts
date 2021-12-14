import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaSectorComboComponent } from './matbea-sector-combo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatbeaHierarchyGeneralComboModule } from '../matbea-hierarchy-general-combo/matbea-hierarchy-general-combo.module';



@NgModule({
  declarations: [MatbeaSectorComboComponent],
  imports: [
    CommonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    MatbeaHierarchyGeneralComboModule
  ],
  exports: [MatbeaSectorComboComponent]
})
export class MatbeaSectorComboModule { }
