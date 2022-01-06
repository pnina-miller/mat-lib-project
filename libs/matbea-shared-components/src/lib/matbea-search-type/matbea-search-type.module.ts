import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatbeaSearchTypeComponent } from './matbea-search-type.component';
import { MatbeaIconButtonModule, MatbeaFormFieldModule, MatbeaLebelModule, MatbeaComboModule, MatbeaInputModule} from "@pdesks/matbea-ui-components";





@NgModule({
  declarations: [ MatbeaSearchTypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    MatbeaIconButtonModule,
    MatbeaFormFieldModule,
    MatbeaLebelModule,
    MatbeaComboModule,
    MatbeaInputModule
  ],
  exports:[
    MatbeaSearchTypeComponent
  ]
})
export class MatbeaSearchTypeModule { }
