import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShlavimDetailsComponent } from './shlavim-details.component';
import { ShlavimDetailsRoutingModule } from './shlavim-details-routing.module';
import { ProjectDetailsHeaderModule } from '../project-details-components/project-details-header/project-details-header.module';
import {
  MatbeaButtonModule,
  MatbeaDetailsSteperModule,
  MatbeaIconButtonModule,
  MatbeaInputModule,
  MatbeaTableModule,
  PipesModule,
} from '@pdesks/matbea-ui-components';

import { YechidotComponent } from './yechidot/yechidot.component';
import { YechidotHeaderComponent } from './yechidot-header/yechidot-header.component';
import { MatMenuModule } from '@angular/material/menu';
import { HosafatYechidaModule } from './hosafat-yechida/hosafat-yechida.module';
import { ActionBarComponent } from './action-bar/action-bar.component';

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
    MatbeaInputModule
  ],
})
export class ShlavimDetailsModule {}
