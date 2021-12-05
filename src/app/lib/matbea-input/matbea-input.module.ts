import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaInputComponent } from './matbea-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatbeaIconButtonModule } from "../index";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";



@NgModule({
  declarations: [
    MatbeaInputComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatbeaIconButtonModule,
    FormsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  exports: [
    MatbeaInputComponent
  ]
})
export class MatbeaInputModule { }
