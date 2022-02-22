import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatbeaButtonModule, MatbeaIconButtonModule, MatbeaSliceDataContainerModule} from "@pdesks/matbea-ui-components";
import {ProjectBasicDetailsModule} from "../../project-basic-details-components/project-basic-details/project-basic-details.module";
import { ShlavimContainerComponent } from './shlavim-container.component';
import { ShlavimModule } from '../shlavim/shlavim.module';
import { TipulBearvuyotModule } from '../../../shlavim-details/tipul-bearvuyot/tipul-bearvuyot.module';

@NgModule({
  declarations: [ ShlavimContainerComponent ],
  imports: [
    CommonModule,
    //BrowserModule,
    //BrowserAnimationsModule,
    MatbeaSliceDataContainerModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule,
    ProjectBasicDetailsModule,
    ShlavimModule,
    TipulBearvuyotModule
  ],
  exports: [ ShlavimContainerComponent ]
})
export class ShlavimContainerModule { }
