import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragPageComponent } from './drag-page.component';
import {DragDropModule} from "@angular/cdk/drag-drop";
import {
  MatbeaButtonModule,
  MatbeaButtonToggleModule,
  MatbeaIconModule,
  MatbeaInputModule,
  MatbeaMenuModule
} from "@pdesks/matbea-ui-components";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    DragPageComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    MatbeaInputModule,
    MatbeaIconModule,


    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatbeaButtonToggleModule,
    MatTableModule,
    MatbeaMenuModule,
    MatbeaButtonModule
  ],
  exports:[
    DragPageComponent
  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'he-IL'},
  ]
})
export class DragPageModule { }
