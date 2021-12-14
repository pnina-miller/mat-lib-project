import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaHierarchyComponent } from './matbea-hierarchy.component';
import {MatbeaHierarchyComboModule} from "@pdesks/matbea-shared-components";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    MatbeaHierarchyComponent
  ],
  exports: [
    MatbeaHierarchyComponent
  ],
  imports: [
    CommonModule,
    MatbeaHierarchyComboModule,
    MatDialogModule,
  ]
})
export class MatbeaHierarchyModule { }
