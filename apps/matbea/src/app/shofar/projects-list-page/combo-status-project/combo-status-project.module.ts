import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComboStatusProjectComponent } from './combo-status-project.component';
import {MatbeaFormFieldModule, MatbeaDividerModule, MatbeaComboModule} from "@pdesks/matbea-ui-components";



@NgModule({
  declarations: [
    ComboStatusProjectComponent
  ],
  imports: [
    CommonModule,
    MatbeaFormFieldModule,
    MatbeaDividerModule,
    MatbeaComboModule
  ],
  exports:[
    ComboStatusProjectComponent
  ]
})
export class ComboStatusProjectModule { }
