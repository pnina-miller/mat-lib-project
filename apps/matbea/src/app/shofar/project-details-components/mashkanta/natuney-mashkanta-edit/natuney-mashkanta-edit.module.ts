import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NatuneyMashkantaEditComponent } from './natuney-mashkanta-edit.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatbeaFormFieldModule, MatbeaLebelModule, MatbeaComboModule, MatbeaInputModule, MatbeaCheckboxModule} from "@pdesks/matbea-ui-components";
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';




@NgModule({
  declarations: [
    NatuneyMashkantaEditComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatbeaFormFieldModule, MatbeaLebelModule, MatbeaComboModule,
    MatDatepickerModule,
    FormsModule, ReactiveFormsModule,
    MatCheckboxModule,
    MatbeaInputModule,
    MatbeaCheckboxModule
  ], 
  exports: [
    NatuneyMashkantaEditComponent
  ]
})
export class NatuneyMashkantaEditModule { }
