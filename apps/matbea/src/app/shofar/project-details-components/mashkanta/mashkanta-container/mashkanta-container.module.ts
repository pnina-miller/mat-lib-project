import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MashkantaContainerComponent } from './mashkanta-container.component';
import { NatuneyMashkantaModule } from '../natuney-mashkanta/natuney-mashkanta.module';
import { MatbeaSliceDataContainerModule, MatbeaButtonModule, MatbeaShmorShinuiButtonModule} from "@pdesks/matbea-ui-components";



@NgModule({
  declarations: [
    MashkantaContainerComponent
  ],
  imports: [
    CommonModule,
    MatbeaSliceDataContainerModule,
    NatuneyMashkantaModule,
    MatbeaButtonModule,
    MatbeaShmorShinuiButtonModule
  ],
  exports: [
    MashkantaContainerComponent
  ]
})
export class MashkantaContainerModule { }

