import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { FilterColumn, MultiSelectFilterColumn, SelectFilterColumn } from '../models/filterColumns';

@Injectable({
  providedIn: 'root',
})
export class MatTableService {

  public dataSource: any[] = [];
  public displayDataSource: BehaviorSubject<any[]> = new BehaviorSubject([]);

  public displayedColumns: BehaviorSubject<Array<string>> = new BehaviorSubject(
    new Array<string>()
  );
  public columnDefinitions: BehaviorSubject<Array<FilterColumn>> =
    new BehaviorSubject(new Array<FilterColumn>());

  public filterArrSource: BehaviorSubject<Array<FilterColumn>> =
    new BehaviorSubject(new Array<FilterColumn>());

  FilterArr = this.filterArrSource.asObservable();

  updateFilters!: Function;

  constructor(private http: HttpClient) {
    this.FilterArr.subscribe((data) => this.filterArrChanged());
  }

  dataChanged() {
    if (this.displayDataSource.getValue() && this.columnDefinitions.getValue())
      this.columnDefinitions.getValue().forEach((col) => {
        if (col.columnfiltertype === 'SELECT'){
          this.getColumnOptions(col.ordernumber,col.columnnameenglish,SelectFilterColumn);
        }
        if (col.columnfiltertype === 'MULTISELECT'){
          this.getColumnOptions(col.ordernumber,col.columnnameenglish,MultiSelectFilterColumn);
        }
      });
  }

  // mat-table Hapoalim lib component call this method in ngOnInit
  // filter-popub lib component call this method if got null @Input TableDataSource?
  init(
    tableDataSource: any[],
    columnDefinitions: FilterColumn[],
    updateFilters: Function = () => {}
  ): void {
    this.resetFilters()
      if (tableDataSource) this.initDataSource(tableDataSource);
      if (columnDefinitions) this.initColumns(columnDefinitions);
    this.updateFilters = updateFilters;
  }

  initDataSource(data: any[]) {
    this.dataSource = data;
    this.displayDataSource.next(this.dataSource);
    this.dataChanged();
  }

  initColumns(columnDefinitions: FilterColumn[]) {
    if(columnDefinitions.find(c=>!c.columnfiltertype))return;
    let cols = columnDefinitions.reduce<string[]>(
      (filtered, option) =>
        option.columnnameenglish
          ? [...filtered, option.associatedcolumnname || option.columnnameenglish.trim()]
          : filtered,
      []
    );
    this.displayedColumns.next([...new Set(cols)]);
    this.columnDefinitions.next(columnDefinitions);
    this.dataChanged();
  }
  
    getColumnOptions(orderNumber: string, columnName: string, clazz:any):void {
    let options = [
      ...new Set(
        this.dataSource?.map((column) => column[columnName])
      ),
    ];
    let columns = this.columnDefinitions.getValue();
    let index=columns.findIndex(col=>col.ordernumber === orderNumber)
    columns[index] = new clazz({ ...columns[index], options: options });

    this.columnDefinitions.next(columns);
  }

  loadDataSource(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

  loadColumnDefinition(url: string): Observable<FilterColumn[]> {
    return this.http.get<FilterColumn[]>(url);
  }


  filterArrChanged() {
    if (this.updateFilters) {
      this.updateFilters(this.filterArrSource.getValue());
    }
    let filters = this.filterArrSource.getValue();
    let filteredData = this?.dataSource?.filter((line) => {
      let check = true;
      filters.forEach((filter) => {
        if (!filter.checkFilter(line)) check = false;
      });
      return check;
    });
    this.displayDataSource.next(filteredData as any[]);
  }

  addFilter(filterColumn: FilterColumn) {
    this.filterArrSource.next(
      this.filterArrSource.getValue().concat(filterColumn)
    );
  }

  setFilter(filterColumn: FilterColumn) {
    if (this.findFilter(filterColumn.ordernumber))
      this.replaceFilter(filterColumn);
    else this.addFilter(filterColumn);
  }

  replaceFilter(filterColumn: FilterColumn) {
    let data = this.filterArrSource
      .getValue()
      .map((filter) =>
        filter.ordernumber === filterColumn.ordernumber ? filterColumn : filter
      );
    this.filterArrSource.next(data);
  }

  removeFilter(ordernumber: string) {
    this.filterArrSource.next(
      this.filterArrSource
        .getValue()
        .filter((filter) => filter.ordernumber !== ordernumber)
    );
  }

  findFilter(ordernumber: string) {
    return this.filterArrSource
      .getValue()
      .find((filter) => filter.ordernumber === ordernumber);
  }

  resetFilters() {
    this.filterArrSource.next([]);
    this.displayDataSource.next(this.dataSource);
  }
}