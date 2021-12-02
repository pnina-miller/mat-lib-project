import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { FilterColumn, MultiSelectFilterColumn, SelectFilterColumn } from '../models/filterColumns';

@Injectable({
  providedIn: 'root',
})
export class MatTableService {

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public displayDataSource: BehaviorSubject<MatTableDataSource<any>> =
    new BehaviorSubject(new MatTableDataSource<any>());

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
    dataSourceUrl: string,
    columnDefinitionsUrl: string,
    tableDataSource: any[],
    columnDefinitions: FilterColumn[],
    updateFilters: Function = () => {}
  ): void {
    if (this.dataSource.filteredData.length === 0) {//?
      if (tableDataSource) this.initDataSource(tableDataSource);
      else if (dataSourceUrl)
        this.loadDataSource(dataSourceUrl).subscribe((res) =>
          this.initDataSource(res)
        );
    }
    
    if (this.columnDefinitions.getValue().length === 0) {
      if (columnDefinitions) this.initColumns(columnDefinitions);
      else if (columnDefinitionsUrl)
        this.loadColumnDefinition(columnDefinitionsUrl).subscribe((res) =>
          this.initColumns(res)
        );
    }
    this.updateFilters = updateFilters;
  }

  initDataSource(data: any[]) {
    this.dataSource = new MatTableDataSource<any>(data);
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
        this.dataSource.filteredData.map((column) => column[columnName])
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
    let filteredData = this?.dataSource.filteredData?.filter((line) => {
      let check = true;
      filters.forEach((filter) => {
        if (!filter.checkFilter(line)) check = false;
      });
      return check;
    });
    this.displayDataSource.next(new MatTableDataSource(filteredData));
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