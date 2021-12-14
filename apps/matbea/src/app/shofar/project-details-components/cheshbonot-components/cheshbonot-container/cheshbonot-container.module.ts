import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheshbonotContainerComponent } from './cheshbonot-container.component';
import { CheshbonotModule } from '../cheshbonot/cheshbonot.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatbeaIconButtonModule} from "@pdesks/matbea-ui-components";

import { MatbeaButtonModule } from '../../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import { MatbeaSliceDataContainerModule } from '../../../../../../../../libs/matbea-ui-components/src/lib/matbea-slice-data-container/matbea-slice-data-container.module';
import { ProjectBasicDetailsModule } from '../../project-basic-details-components/project-basic-details/project-basic-details.module';


@NgModule({
  declarations: [ CheshbonotContainerComponent ],
  imports: [
    CommonModule,
    CheshbonotModule,    
    //BrowserModule,
    //BrowserAnimationsModule,
    MatbeaSliceDataContainerModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule,
    ProjectBasicDetailsModule,
  ],
  exports: [ CheshbonotContainerComponent ]
})
export class CheshbonotContainerModule { }
