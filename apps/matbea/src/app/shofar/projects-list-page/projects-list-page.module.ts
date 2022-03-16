import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsListPageRoutingModule } from './projects-list-page-routing.module';
import { ProjectsListPageComponent } from './projects-list-page.component';
import {
  MatbeaButtonModule,
  MatbeaColumnsPickerModule,
  MatbeaDividerModule, MatbeaIconButtonModule, MatbeaInputModule
} from '@pdesks/matbea-ui-components';
import { ProjectsListModule } from './projects-list/projects-list.module';
import {CreateProjectWizardButtonModule} from "../create-project-wizard/create-project-wizard-button/create-project-wizard-button.module";
import {MatbeaSearchTypeModule} from "@pdesks/matbea-shared-components";
import {MatbeaHierarchyModule} from "./matbea-hierarchy/matbea-hierarchy.module";
import {ButtonsForTableComponent} from "./buttons-for-table/buttons-for-table.component";
import {OpenColumnPickerButtonComponent} from "./buttons-for-table/open-column-picker-button/open-column-picker-button.component";
import {MatDialogModule} from "@angular/material/dialog";
import { HipusLefiPerteyProjectComponent } from './hipus-lefi-pertey-project/hipus-lefi-pertey-project.component';
import { ComboStatusProjectModule } from './combo-status-project/combo-status-project.module';
import { MatbeaTableModule } from 'libs/matbea-ui-components/src/lib/matbea-table-dynamic/matbea-table.module';


@NgModule({
  declarations: [
    ProjectsListPageComponent,
    ButtonsForTableComponent,
    OpenColumnPickerButtonComponent,
    HipusLefiPerteyProjectComponent,
  ],
  imports: [

    CommonModule,
    ProjectsListPageRoutingModule,
    ProjectsListModule ,
    MatbeaDividerModule,
    MatbeaButtonModule,
    CreateProjectWizardButtonModule,
    MatbeaSearchTypeModule,
    MatbeaHierarchyModule,
    ComboStatusProjectModule,
    MatbeaColumnsPickerModule,
    MatDialogModule,
    MatbeaDividerModule,
    MatbeaIconButtonModule,
    MatbeaTableModule
  ],
  exports:[
    ProjectsListPageComponent,
    ButtonsForTableComponent,
    OpenColumnPickerButtonComponent,
    HipusLefiPerteyProjectComponent
  ]
})
export class ProjectsListPageModule { }
