import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaHierarchyGeneralComboComponent } from './matbea-hierarchy-general-combo.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatbeaComboModule } from "@pdesks/matbea-ui-components";


@NgModule({
  declarations: [MatbeaHierarchyGeneralComboComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule,
    HttpClientModule,
    MatbeaComboModule
  ],
  exports: [MatbeaHierarchyGeneralComboComponent]
})
export class MatbeaHierarchyGeneralComboModule { }
