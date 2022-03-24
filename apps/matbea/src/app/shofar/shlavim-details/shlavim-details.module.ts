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
import { YechidotSelectHeaderMenuComponent } from './yechidot-select-header-menu/yechidot-select-header-menu.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ShlavimDetailsComponent,
    YechidotComponent,
    YechidotHeaderComponent,
    ActionBarComponent,
    YechidotSelectHeaderMenuComponent    
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
    MatbeaIconModule,
    MatCheckboxModule, FormsModule, ReactiveFormsModule
  ],
  exports: [YechidotSelectHeaderMenuComponent]
})
export class ShlavimDetailsModule {}

