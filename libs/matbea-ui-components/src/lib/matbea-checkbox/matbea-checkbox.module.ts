import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatbeaCheckboxComponent} from "./matbea-checkbox.component";
import {MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions, MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [ MatbeaCheckboxComponent],
  imports: [
    CommonModule,
    MatCheckboxModule,
    FormsModule
  ],
  exports: [
    MatbeaCheckboxComponent
  ],
  providers: [
    {provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'check-indeterminate' } as MatCheckboxDefaultOptions}
  ]
})
export class MatbeaCheckboxModule { }
