import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaFormFieldComponent } from './matbea-form-field.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    MatbeaFormFieldComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,

  ], exports:[MatbeaFormFieldComponent]
})
export class MatbeaFormFieldModule { }
