import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {A11yModule} from '@angular/cdk/a11y';
import { MatbeaColumnsPickerComponent } from './matbea-columns-picker.component';
import { MatbeaColumnsDragModule } from '../matbea-columns-drag/matbea-columns-drag.module';
import { FormsModule } from '@angular/forms';
import { MatbeaButtonModule } from '../matbea-button/matbea-button.module';
import {MatbeaSlideToggleModule} from "../matbea-slide-toggle/matbea-slide-toggle.module";

@NgModule({
  declarations: [
    MatbeaColumnsPickerComponent
  ],
  imports: [
    CommonModule,
    MatbeaColumnsDragModule,
    MatDialogModule,
    MatSlideToggleModule,
    A11yModule,
    FormsModule,
    MatbeaButtonModule,
    MatbeaSlideToggleModule
  ],
  exports: [
    MatbeaColumnsPickerComponent,


  ],
  entryComponents:[
    MatbeaColumnsPickerComponent
  ]
})
export class MatbeaColumnsPickerModule { }
