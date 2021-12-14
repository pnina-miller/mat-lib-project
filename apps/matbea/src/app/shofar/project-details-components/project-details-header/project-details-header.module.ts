import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsHeaderComponent } from './project-details-header.component';
import {MatbeaDividerModule, MatbeaInputModule, MatbeaShmorShinuiButtonModule} from "@pdesks/matbea-ui-components";



@NgModule({
  declarations: [
    ProjectDetailsHeaderComponent
  ],
  imports: [
    CommonModule,
    MatbeaShmorShinuiButtonModule,
    MatbeaDividerModule,
    MatbeaInputModule
  ],
  exports:[
    ProjectDetailsHeaderComponent
  ]
})
export class ProjectDetailsHeaderModule { }
