import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmalotEditComponent } from './amalot-edit.component'
import { MatbeaFormFieldModule, MatbeaLebelModule, MatbeaInputModule} from "@pdesks/matbea-ui-components";
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AmalotEditComponent
  ],
  imports: [
    CommonModule,
    MatbeaFormFieldModule, MatbeaLebelModule, MatbeaInputModule,
    MatRadioModule,
    MatInputModule    
  ],
  exports: [
    AmalotEditComponent
  ]
})
export class AmalotEditModule { }
