import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TipulBearvuyotComponent } from './tipul-bearvuyot.component';
import { MatbeaButtonModule, MatbeaCheckboxModule, MatbeaIconModule, MatbeaInputModule, MatbeaTableModule } from '@pdesks/matbea-ui-components';



@NgModule({
  declarations: [
    TipulBearvuyotComponent
  ],
  imports: [
    CommonModule,
    MatbeaButtonModule,
    MatbeaTableModule,
    MatbeaCheckboxModule,
    MatbeaInputModule,
    MatbeaIconModule
  ]
})
export class TipulBearvuyotModule { }
