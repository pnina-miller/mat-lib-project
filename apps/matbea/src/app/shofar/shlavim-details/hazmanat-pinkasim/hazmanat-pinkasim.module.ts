import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HazmanatPinkasimComponent } from './hazmanat-pinkasim.component';
import { MatbeaButtonModule, MatbeaDividerModule, MatbeaIconButtonModule, MatbeaTableModule, PipesModule, RadioButtonTabModule } from '@pdesks/matbea-ui-components';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [HazmanatPinkasimComponent],
  imports: [
    CommonModule,
    MatbeaTableModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule,
    PipesModule,
    RadioButtonTabModule,
    MatbeaDividerModule,
    MatFormFieldModule
  ]
})
export class HazmanatPinkasimModule { }
