import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaAgafComboComponent } from './matbea-agaf-combo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatbeaHierarchyGeneralComboModule } from '../matbea-hierarchy-general-combo/matbea-hierarchy-general-combo.module';


@NgModule({
  declarations: [MatbeaAgafComboComponent],
  imports: [
    CommonModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // HttpClientModule,
    MatbeaHierarchyGeneralComboModule,
  ],
  exports: [MatbeaAgafComboComponent]

})
export class MatbeaAgafComboModule { }
