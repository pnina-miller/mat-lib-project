
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { FilterColumn, MultiSelectFilterColumn, SelectFilterColumn } from '../models/filterColumns';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatTableService {
  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public displayDataSource: BehaviorSubject<MatTableDataSource<any>> = new BehaviorSubject(new MatTableDataSource<any>());

  public displayedColumns: BehaviorSubject<Array<string>> = new BehaviorSubject(new Array<string>());
  public columnDefinitions: BehaviorSubject<Array<FilterColumn>> = new BehaviorSubject(new Array<FilterColumn>());

  public filterArrSource: BehaviorSubject<Array<FilterColumn>> = new BehaviorSubject(new Array<FilterColumn>());
  FilterArr = this.filterArrSource.asObservable()

  updateFilters!: Function;
  constructor(private http: HttpClient) {
    this.FilterArr.subscribe(data => {
      this.dataSource.filter = this.filterArrSource.getValue().reduce((filters, filter) => ({ ...filters, [filter.columnnamehebrew]: filter }), {}) as string;
    })


  }
  dataChanged() {
    if (this.displayDataSource.getValue() && this.columnDefinitions.getValue()) {
      let columns = this.columnDefinitions.getValue()
      this.columnDefinitions.getValue().forEach((col, index) => {

        if (col.columnfiltertype === 'SELECT') {
          let options = [...new Set(this.dataSource.filteredData.map(column => column[col.columnnamehebrew]))]
          columns[index] = new SelectFilterColumn({ ...col, options: options })
        }
        if (col.columnfiltertype === 'MULTISELECT') {
          let options = [...new Set(this.dataSource.filteredData.map(column => column[col.columnnamehebrew]))]
          columns[index] = new MultiSelectFilterColumn({ ...col, options: options })
        }
      })
      this.columnDefinitions.next(columns);
    }
  }

  // mat-table Hapoalim lib component call this method in ngOnInit
  // filter-popub lib component call this method if got null @Input TableDataSource
  init(dataSourceUrl: string, columnDefinitionsUrl: string, tableDataSource: any[], columnDefinitions: FilterColumn[], updateFilters: Function = () => { }): void {//{if (!dataSource) load from server by environment.ts parameter else subjectDataSource(next(dataSource));

    if (dataSourceUrl) this.loadDataSource(dataSourceUrl).subscribe(res => this.initDataSource(res))
    else if (tableDataSource) this.initDataSource(tableDataSource)
    else this.loadDemoData().subscribe(data => this.initDataSource(data))

    this.initColumns(columnDefinitionsUrl, columnDefinitions)
    this.updateFilters = updateFilters;
  }

  initDataSource(data: any[]) {
    this.dataSource = new MatTableDataSource<any>(data)
    this.dataSource.filterPredicate = (data: any, filter: any) => this.checkFilters(data, filter);

    this.displayDataSource.next(this.dataSource);
    this.dataChanged();
  }

  initColumns(columnDefinitionsUrl: string, columnDefinitions: FilterColumn[]) {
    if (columnDefinitions) {
      let cols = columnDefinitions.reduce<string[]>((filtered, option) => option.columnnamehebrew ? [...filtered, option.columnnamehebrew] : filtered, []);
      this.displayedColumns.next([...new Set(cols)])
      this.columnDefinitions.next(columnDefinitions)
      this.dataChanged();

    }
    else if (!columnDefinitionsUrl) columnDefinitionsUrl = 'assets/data/tableColumns.json';
    if (columnDefinitionsUrl) {
      this.loadColumnDefinition(columnDefinitionsUrl).subscribe(res => {
        let cols = res.reduce<string[]>((filtered, option) => option.columnnamehebrew ? [...filtered, option.columnnamehebrew] : filtered, []);
        this.displayedColumns.next([...new Set(cols)])
        this.columnDefinitions.next(res)
        this.dataChanged();
      })
    }
  }


  loadDemoData(): Observable<any[]> {
    return this.loadDataSource('assets/data/tableColumns.json').pipe(mergeMap((res: any[]) => {
      let dataSource = Array.from(Array(10).keys()).map(i => res.reduce((filtered, option) => ({ ...filtered, [option.columnnamehebrew]: (Math.random() + 1).toString(36).substring(7) }), {}));
      return of(dataSource);
    }))
  }

  loadDataSource(url: string): Observable<any[]> {
    return this.http.get<any[]>(url);
  }

  loadColumnDefinition(url: string): Observable<FilterColumn[]> {
    return this.http.get<FilterColumn[]>(url);
  }


  checkFilters(data: any, filters: FilterColumn) {
    let check = true
    Object.values(filters).forEach(filter => {
      if (!filter.checkFilter(data)) check = false;

    })
    return check
  }

  addFilter(filterColumn: FilterColumn) {
    this.filterArrSource.next(this.filterArrSource.getValue().concat(filterColumn));
  }

  setFilter(filterColumn: FilterColumn) {
    if (this.findFilter(filterColumn.ordernumber))
      this.replaceFilter(filterColumn);
    else
      this.addFilter(filterColumn);
  }

  replaceFilter(filterColumn: FilterColumn) {
    let data = this.filterArrSource.getValue().map(filter => (filter.ordernumber === filterColumn.ordernumber ? filterColumn : filter))
    this.filterArrSource.next(data);

  }

  removeFilter(ordernumber: string) {
    this.filterArrSource.next(this.filterArrSource.getValue().filter(filter => filter.ordernumber !== ordernumber));
  }

  findFilter(ordernumber: string) {
    return this.filterArrSource.getValue().find(filter => filter.ordernumber === ordernumber);
  }

  resetFilters() {
    this.filterArrSource.next([]);
    this.displayDataSource.next(this.dataSource)
  }
}