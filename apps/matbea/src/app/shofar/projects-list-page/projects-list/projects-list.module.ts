import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsListComponent } from './projects-list.component';
import {MatTableModule} from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
import { MatButtonModule } from '@angular/material/button';
import {
  MatbeaTableModule,
  MatbeaColumnsPickerModule,
  MatbeaDividerModule,
  MatbeaIconButtonModule,
  MatbeaSlideToggleModule
} from '@pdesks/matbea-ui-components';
import { MatDialogModule } from '@angular/material/dialog';




@NgModule({
  declarations: [ProjectsListComponent],
  imports: [
    CommonModule,
    // MatTableModule,
    // MatButtonModule,
    // CdkTableModule,
    MatbeaTableModule,
    //  MatbeaColumnsPickerModule,
    //  MatDialogModule,
    //  MatbeaDividerModule,
    //  MatbeaIconButtonModule,


  ],
   bootstrap: [ProjectsListComponent],
  exports:[
    ProjectsListComponent,
    // MatbeaTableModule

  ]
})
export class ProjectsListModule { }
