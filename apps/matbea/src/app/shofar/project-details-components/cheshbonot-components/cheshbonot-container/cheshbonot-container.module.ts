import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheshbonotContainerComponent } from './cheshbonot-container.component';
import { CheshbonotModule } from '../cheshbonot/cheshbonot.module';
import {MatbeaButtonModule, MatbeaIconButtonModule, MatbeaSliceDataContainerModule} from "@pdesks/matbea-ui-components";
import {ProjectBasicDetailsModule} from "../../project-basic-details-components/project-basic-details/project-basic-details.module";

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
