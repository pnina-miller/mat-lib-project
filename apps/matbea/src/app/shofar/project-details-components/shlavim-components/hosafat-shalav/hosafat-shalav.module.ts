import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatbeaButtonModule } from '../../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import { HosafatShalavComponent } from './hosafat-shalav.component';
import { MatbeaIconButtonModule, RadioButtonTabModule, MatbeaCheckboxModule, MatbeaInputModule } from '@pdesks/matbea-ui-components';



@NgModule({
  declarations: [HosafatShalavComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    CdkTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatBadgeModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule,
    MatDialogModule,
    MatSelectModule,
    TextFieldModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatCheckboxModule,
    MatFormFieldModule,
    RadioButtonTabModule,
    MatbeaCheckboxModule,
    MatbeaInputModule
  ],
  exports: [HosafatShalavComponent]
})
export class HosafatShalavModule { }