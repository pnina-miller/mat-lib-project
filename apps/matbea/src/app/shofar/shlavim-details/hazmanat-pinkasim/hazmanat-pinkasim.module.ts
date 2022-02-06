import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HazmanatPinkasimComponent } from './hazmanat-pinkasim.component';
import { MatbeaButtonModule, MatbeaDividerModule, MatbeaIconButtonModule, MatbeaTableModule, PipesModule, RadioButtonTabModule } from '@pdesks/matbea-ui-components';



@NgModule({
  declarations: [HazmanatPinkasimComponent],
  imports: [
    CommonModule,
    MatbeaTableModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule,
    PipesModule,
    RadioButtonTabModule,
    MatbeaDividerModule
  ]
})
export class HazmanatPinkasimModule { }
