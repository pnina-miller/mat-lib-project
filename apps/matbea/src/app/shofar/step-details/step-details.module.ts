import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDetailsComponent } from './step-details.component';
import { StepDetailsRoutingModule } from './step-details-routing.module';
import { ProjectDetailsHeaderModule } from '../project-details-components/project-details-header/project-details-header.module';
import {
  MatbeaDetailsSteperModule,
  MatbeaIconButtonModule,
  MatbeaSliceDataContainerModule,
  MatbeaSlideToggleModule,
  MatbeaTableModule,
  PipesModule
} from "@pdesks/matbea-ui-components";

import { UnitsComponentComponent } from '../step-details-components/units-component/units-component.component';
import { UnitsHeaderComponentComponent } from '../step-details-components/units-header-component/units-header-component.component';


@NgModule({
  declarations: [StepDetailsComponent, UnitsComponentComponent, UnitsHeaderComponentComponent],
  imports: [
    CommonModule,
    StepDetailsRoutingModule,
    ProjectDetailsHeaderModule,
    MatbeaIconButtonModule,
    MatbeaDetailsSteperModule,
    MatbeaTableModule,
    PipesModule,

  ]
})
export class StepDetailsModule { }
