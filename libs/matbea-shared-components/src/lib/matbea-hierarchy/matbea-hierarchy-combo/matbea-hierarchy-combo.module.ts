import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaHierarchyComboComponent } from './matbea-hierarchy-combo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import { MatbeaSectorComboModule } from '../matbea-sector-combo/matbea-sector-combo.module';
import { MatbeaChativaComboModule } from '../matbea-chativa-combo/matbea-chativa-combo.module';
import { MatbeaAgafComboModule } from '../matbea-agaf-combo/matbea-agaf-combo.module';
import { MatbeaMakalComboModule } from '../matbea-makal-combo/matbea-makal-combo.module';



@NgModule({
  declarations: [MatbeaHierarchyComboComponent],
  imports: [
    CommonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // HttpClientModule,
    MatbeaChativaComboModule,
    MatbeaAgafComboModule,
    MatbeaSectorComboModule,
    MatbeaMakalComboModule

  ],
  exports: [MatbeaHierarchyComboComponent]

})
export class MatbeaHierarchyComboModule { }
