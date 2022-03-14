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
import { MatbeaDinamicTableModule } from 'libs/matbea-ui-components/src/lib/matbea-table/matbea-dinamic-table/matbea-dinamic-table.module';




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
    MatbeaDinamicTableModule


  ],
   bootstrap: [ProjectsListComponent],
  exports:[
    ProjectsListComponent,
    // MatbeaTableModule

  ]
})
export class ProjectsListModule { }
