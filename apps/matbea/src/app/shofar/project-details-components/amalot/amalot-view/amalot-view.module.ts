import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmalotViewComponent } from './amalot-view.component'
import { MatbeaFormFieldModule, MatbeaLebelModule, MatbeaInputModule} from "@pdesks/matbea-ui-components";
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [
    AmalotViewComponent
  ],
  imports: [
    CommonModule,
    MatbeaFormFieldModule, MatbeaLebelModule, MatbeaInputModule,
    MatRadioModule
  ], 
  exports: [
    AmalotViewComponent
  ]
})
export class AmalotViewModule { }
