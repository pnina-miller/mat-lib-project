import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmalotEditComponent } from './amalot-edit.component'
import { MatbeaFormFieldModule, MatbeaLebelModule, MatbeaInputModule} from "@pdesks/matbea-ui-components";
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [
    AmalotEditComponent
  ],
  imports: [
    CommonModule,
    MatbeaFormFieldModule, MatbeaLebelModule, MatbeaInputModule,
    MatRadioModule
  ],
  exports: [
    AmalotEditComponent
  ]
})
export class AmalotEditModule { }
