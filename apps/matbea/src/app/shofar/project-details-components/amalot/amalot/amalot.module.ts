import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmalotComponent } from './amalot.component';
import { MatbeaFormFieldModule, MatbeaLebelModule} from "@pdesks/matbea-ui-components";
import { MatRadioModule } from '@angular/material/radio';
import { AmalotEditModule } from '../amalot-edit/amalot-edit.module';
import { AmalotViewModule } from '../amalot-view/amalot-view.module';



@NgModule({
  declarations: [
    AmalotComponent
  ],
  imports: [
    CommonModule,
    MatbeaFormFieldModule,
    MatbeaLebelModule,
    MatRadioModule,
    AmalotEditModule,
    AmalotViewModule
  ],
  exports: [
    AmalotComponent
  ]
})
export class AmalotModule { }
