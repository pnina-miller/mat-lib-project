import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShlavimDetailsComponent } from './shlavim-details.component';
import { ShlavimDetailsRoutingModule } from './shlavim-details-routing.module';
import { ProjectDetailsHeaderModule } from '../project-details-components/project-details-header/project-details-header.module';
import {
  MatbeaButtonModule,
  MatbeaComboModule,
  MatbeaDetailsSteperModule,
  MatbeaDividerModule,
  MatbeaIconButtonModule,
  MatbeaIconModule,
  MatbeaInputModule,
  MatbeaMenuModule,
  PipesModule, MatbeaTableModule
} from '@pdesks/matbea-ui-components';

import { YechidotComponent } from './yechidot/yechidot.component';
import { YechidotHeaderComponent } from './yechidot-header/yechidot-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { HosafatYechidaModule } from './hosafat-yechida/hosafat-yechida.module';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { HazmanatPinkasimModule } from './hazmanat-pinkasim/hazmanat-pinkasim.module';
// import { MatbeaTableModule } from 'libs/matbea-ui-components/src/lib/matbea-table-dynamic/matbea-table.module';

@NgModule({
  declarations: [
    ShlavimDetailsComponent,
    YechidotComponent,
    YechidotHeaderComponent,
    ActionBarComponent
  ],
  imports: [
    CommonModule,
    ShlavimDetailsRoutingModule,
    ProjectDetailsHeaderModule,
    MatbeaIconButtonModule,
    MatbeaDetailsSteperModule,
    MatbeaTableModule,
    PipesModule,
    MatMenuModule,
    MatbeaButtonModule,
    HosafatYechidaModule,
    HazmanatPinkasimModule,
    MatbeaInputModule,
    MatbeaDividerModule,
    MatbeaComboModule,
    MatbeaMenuModule,
    MatbeaIconModule
  ],
})
export class ShlavimDetailsModule {}

