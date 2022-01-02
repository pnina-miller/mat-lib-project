import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDetailsComponent } from './step-details.component';
import { StepDetailsRoutingModule } from './step-details-routing.module';
import { ProjectDetailsHeaderModule } from '../project-details-components/project-details-header/project-details-header.module';
import {
  MatbeaButtonModule,
  MatbeaDetailsSteperModule,
  MatbeaIconButtonModule,
  MatbeaInputModule,
  MatbeaSliceDataContainerModule,
  MatbeaSlideToggleModule,
  MatbeaTableModule,
  PipesModule,
} from '@pdesks/matbea-ui-components';

import { UnitsComponent } from '../step-details/units/units.component';
import { UnitsHeaderComponent } from './units-header/units-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { HosafatYechidaModule } from './hosafat-yechida/hosafat-yechida.module';
import { ActionBarComponent } from './action-bar/action-bar.component';

@NgModule({
  declarations: [
    StepDetailsComponent,
    UnitsComponent,
    UnitsHeaderComponent,
    ActionBarComponent
  ],
  imports: [
    CommonModule,
    StepDetailsRoutingModule,
    ProjectDetailsHeaderModule,
    MatbeaIconButtonModule,
    MatbeaDetailsSteperModule,
    MatbeaTableModule,
    PipesModule,
    MatMenuModule,
    MatbeaButtonModule,
    HosafatYechidaModule,
    MatbeaInputModule
  ],
})
export class StepDetailsModule {}
