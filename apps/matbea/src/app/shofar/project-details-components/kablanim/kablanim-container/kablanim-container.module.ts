import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaSliceDataContainerModule, MatbeaButtonModule, MatbeaIconButtonModule } from "@pdesks/matbea-ui-components";
import { KablanimContainerComponent } from './kablanim-container.component';
import { KablanimModule } from '../kablanim/kablanim.module';


@NgModule({
  declarations: [
    KablanimContainerComponent  
  ],
  imports: [
    CommonModule, 
    MatbeaSliceDataContainerModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule,
    KablanimModule
  ],
  exports: [
    KablanimContainerComponent
  ]
})
export class KablanimContainerModule { }
