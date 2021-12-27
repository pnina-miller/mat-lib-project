
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {MatbeaButtonModule, MatbeaIconButtonModule, MatbeaIconModule, MatbeaSliceDataContainerModule} from "@pdesks/matbea-ui-components";
// import {ProjectBasicDetailsModule} from "../../project-basic-details-components/project-basic-details/project-basic-details.module";
import { ShlavimContainerComponent } from './shlavim-container.component';
// import { ShlavimModule } from '../shlavim/shlavim.module';

@NgModule({
  declarations: [ ShlavimContainerComponent ],
  imports: [
    // CommonModule,
    // MatbeaSliceDataContainerModule,
    // MatbeaButtonModule,
    // MatbeaIconButtonModule,
    // ProjectBasicDetailsModule,
    // ShlavimModule,
    // MatbeaIconModule
  ],
  exports: [ ShlavimContainerComponent ]
})
export class ShlavimContainerModule { }