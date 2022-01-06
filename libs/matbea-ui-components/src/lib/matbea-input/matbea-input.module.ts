import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatbeaInputComponent} from "./matbea-input.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatbeaIconButtonModule} from "../matbea-icon-button/matbea-icon-button.module";




@NgModule({
  declarations: [
    MatbeaInputComponent
  ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        MatAutocompleteModule,
        ReactiveFormsModule,
      MatbeaIconButtonModule
    ],
  exports: [
    MatbeaInputComponent
  ]
})
export class MatbeaInputModule { }
