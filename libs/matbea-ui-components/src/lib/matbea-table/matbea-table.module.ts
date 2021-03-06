import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaTableComponent } from './matbea-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PipesModule } from '../pipes/pipes.module';
import { MatbeaPaginatorIntl } from './matbea-paginator-intl';
import { MatbeaTableCellComponent } from './matbea-table-cell/matbea-table-cell.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FilterPopupComponent } from "./mat-filter/filter-popup/filter-popup.component";
import { StringFilterComponent } from "./mat-filter/filters/string-filter/string-filter.component";
import { SelectFilterComponent } from "./mat-filter/filters/select-filter/select-filter.component";
import { FilterChipsWrapperComponent } from "./filter-chips-wrapper/filter-chips-wrapper.component";
import { DateFilterComponent } from "./mat-filter/filters/date-filter/date-filter.component";
import { NumericFilterComponent } from "./mat-filter/filters/numeric-filter/numeric-filter.component";
import { BooleanFilterComponent } from "./mat-filter/filters/boolean-filter/boolean-filter.component";
import { MultiSelectFilterComponent } from "./mat-filter/filters/multi-select-filter/multi-select-filter.component";
import { MatFilterComponent } from "./mat-filter/mat-filter.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatMenuModule } from "@angular/material/menu";
import { MatDividerModule } from "@angular/material/divider";
import { MatChipsModule } from "@angular/material/chips";
import { MatListModule } from "@angular/material/list";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatTableService } from "./services/mat-table.service";
import { StringFilterColumn } from './models/filterColumns';
import { MatbeaIconButtonModule } from '../matbea-icon-button/matbea-icon-button.module';
import { MatbeaInputModule } from '../matbea-input/matbea-input.module';
import { MatbeaIconModule } from '../matbea-icon/matbea-icon.module';
import { MatbeaCheckboxModule } from '../matbea-checkbox/matbea-checkbox.module';
import { MatbeaButtonModule } from '../matbea-button/matbea-button.module';
import { RadioButtonTabModule } from '../radio-button-tab/radio-button-tab.module';
import { MatbeaComboModule } from '../matbea-combo/matbea-combo.module';
import {RouterModule} from "@angular/router";
import {MatbeaMenuModule} from "../matbea-menu/matbea-menu.module";
import { TableVirtualScrollModule } from 'ng-table-virtual-scroll'
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatbeaTableCellContainerComponent } from './matbea-table-cell-container/matbea-table-cell-container.component';
import { MatbeaTableHeaderCellComponent } from './matbea-table-header-cell/matbea-table-header-cell.component';



@NgModule({
  declarations: [
    MatbeaTableComponent,
    MatbeaTableCellComponent,
    FilterPopupComponent,
    SelectFilterComponent,
    StringFilterComponent,
    FilterChipsWrapperComponent,
    DateFilterComponent,
    BooleanFilterComponent,
    MultiSelectFilterComponent,
    NumericFilterComponent,
    MatFilterComponent,
    MatbeaTableCellContainerComponent,
    MatbeaTableHeaderCellComponent],
    imports: [
      MatTableModule,
        CommonModule,
        MatButtonModule,
        CdkTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatBadgeModule,
        MatTooltipModule,
        PipesModule,
        MatIconModule,
        TableVirtualScrollModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        HttpClientModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatMenuModule,
        MatDividerModule,
        MatListModule,
        MatChipsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ScrollingModule,
        MatbeaIconButtonModule,
        MatbeaIconModule,
        MatbeaInputModule,
        MatbeaCheckboxModule,
        MatbeaButtonModule,
        RadioButtonTabModule,
        MatbeaComboModule,
        RouterModule,
        MatbeaMenuModule
          ],
  exports: [
    MatbeaTableComponent,
    MatbeaTableCellComponent,
    FilterPopupComponent,
    SelectFilterComponent,
    StringFilterComponent,
    FilterChipsWrapperComponent,
    DateFilterComponent,
    BooleanFilterComponent,
    MultiSelectFilterComponent,
    NumericFilterComponent,
    MatFilterComponent
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: new MatbeaPaginatorIntl() },
    MatTableService,
    {
      provide: 'defaultCol',
      useValue: new StringFilterColumn({}),
    }
  ]
})
export class MatbeaTableModule { }
