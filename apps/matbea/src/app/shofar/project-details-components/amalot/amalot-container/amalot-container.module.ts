import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmalotContainerComponent } from './amalot-container.component';
import { AmalotModule } from '../amalot/amalot.module';
import { MatbeaSliceDataContainerModule, MatbeaButtonModule, MatbeaIconButtonModule, MatbeaShmorShinuiButtonModule } from "@pdesks/matbea-ui-components";


@NgModule({
  declarations: [
    AmalotContainerComponent
  ],
  imports: [
    CommonModule,
    AmalotModule,
    MatbeaSliceDataContainerModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule, 
    MatbeaShmorShinuiButtonModule
  ],
  exports: [
    AmalotContainerComponent
  ]
})
export class AmalotContainerModule { }
