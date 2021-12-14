import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheshbonotComponent } from './cheshbonot.component';
import { MatbeaTableModule } from '@pdesks/matbea-ui-components';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HosafatCheshbonModule } from '../hosafat-cheshbon/hosafat-cheshbon.module';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatbeaButtonModule } from '../../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import { MatbeaLebelModule } from '../../../../../../../../libs/matbea-ui-components/src/lib/matbea-lebel/matbea-lebel.module'


@NgModule({
  declarations: [CheshbonotComponent],
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
    HosafatCheshbonModule,
    MatbeaButtonModule,
    MatIconModule,
    MatSelectModule,
    TextFieldModule,
    ReactiveFormsModule,
    MatbeaLebelModule,
    MatRadioModule,
    MatDialogModule,

  ],
  exports: [CheshbonotComponent]
})
export class CheshbonotModule { }
