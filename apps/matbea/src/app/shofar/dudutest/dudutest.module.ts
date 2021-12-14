import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DudutestComponent } from './dudutest.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatbeaAgafComboModule } from 'libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-agaf-combo/matbea-agaf-combo.module';
import { MatbeaSectorComboModule } from 'libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-sector-combo/matbea-sector-combo.module';
import { MatbeaHierarchyComboModule } from 'libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-combo/matbea-hierarchy-combo.module';
import { MatbeaHierarchyComboComponent } from 'libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-combo/matbea-hierarchy-combo.component';



@NgModule({
  declarations: [DudutestComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    MatbeaAgafComboModule,
    MatbeaSectorComboModule,
    MatbeaHierarchyComboModule,
    MatbeaHierarchyComboComponent,

  ],
  exports: [DudutestComponent,
    // MatFormFieldModule, 
    // MatInputModule
  ]
})
export class DudutestModule { }
