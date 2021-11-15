import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FilterPopupComponent } from './lib/mat-filter/filter-popup/filter-popup.component';
import { tableExampleComponent } from './table-example/table-example.component'
import { SelectFilterComponent } from './lib/mat-filter/filters/select-filter/select-filter.component';
import { StringFilterComponent } from './lib/mat-filter/filters/string-filter/string-filter.component';
import { FilterWrapperComponent } from './lib/mat-filter/filters/filter-wrapper/filter-wrapper.component';
import { FilterChipsWrapperComponent } from './lib/filter-chips-wrapper/filter-chips-wrapper.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableComponent } from './lib/mat-table/mat-table.component';
import { HttpClientModule } from  '@angular/common/http';
import { DateFilterComponent } from './lib/mat-filter/filters/date-filter/date-filter.component';
import { BooleanFilterComponent } from './lib/mat-filter/filters/boolean-filter/boolean-filter.component';
import { MultiSelectFilterComponent } from './lib/mat-filter/filters/multi-select-filter/multi-select-filter.component';
import {MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { NumericFilterComponent } from './lib/mat-filter/filters/numeric-filter/numeric-filter.component';
import { MatFilterComponent } from './lib/mat-filter/mat-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    FilterPopupComponent,
    tableExampleComponent,
    SelectFilterComponent,
    StringFilterComponent,
    FilterWrapperComponent,
    FilterChipsWrapperComponent,
    MatTableComponent,
    DateFilterComponent,
    BooleanFilterComponent,
    MultiSelectFilterComponent,
    NumericFilterComponent,
    MatFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
