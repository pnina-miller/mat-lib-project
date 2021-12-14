import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaInputCitiesComponent } from './matbea-input-cities.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatbeaInputModule } from '@pdesks/matbea-ui-components';


@NgModule({
  declarations: [MatbeaInputCitiesComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,    
    ReactiveFormsModule ,    
    FormsModule,
    MatAutocompleteModule,    
    MatbeaInputModule,
  ],
  exports: [MatbeaInputCitiesComponent]
})
export class MatbeaInputCitiesModule { }
