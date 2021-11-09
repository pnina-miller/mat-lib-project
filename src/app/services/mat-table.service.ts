
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, BehaviorSubject } from 'rxjs';
import { FilterColumn } from '../models/filterColumns';

@Injectable({
  providedIn: 'root'
})
export class MatTableService {

  public dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  public displayDataSource: BehaviorSubject<MatTableDataSource<any>> = new BehaviorSubject(new MatTableDataSource<any>());
  public filterArrSource: BehaviorSubject<Array<FilterColumn>> = new BehaviorSubject(new Array<FilterColumn>());
  FilterArr = this.filterArrSource.asObservable()

  constructor(private http: HttpClient) {
    this.initDataSource()
    this.FilterArr.subscribe(data => { this.filterArrChanged() })

  }
  // mat-table Hapoalim lib component call this method in ngOnInit
  // filter-popub lib component call this method if got null @Input TableDataSource
  initDataSource(/*tableDataSource, columnDefinitions */) {//{if (!dataSource) load from server by environment.ts parameter else subjectDataSource(next(dataSource));
  // if(!columnsDefinition) etc...}
    this.load().subscribe(res => {
      let data = Object.values(res)
      let dataSourch = Array.from(Array(10).keys()).map(i => {
        let obj: { [key: string]: string } = { id: i.toString() };
        data.forEach(col => col.columnnamehebrew ? obj[col.columnnamehebrew] = (Math.random() + 1).toString(36).substring(7) : {})
        return obj;
      })

      this.dataSource = new MatTableDataSource<any>(dataSourch)
      this.displayDataSource.next(this.dataSource);

    })
  }
  //getColumnOptions(columnName){
    //dataSource.filter(column=>{}).distinct()
  //}
  load(): Observable<FilterColumn[]> {
    return this.http.get<FilterColumn[]>('assets/data/tableColumns.json');
  }

  filterArrChanged() {
    let filters = this.filterArrSource.getValue()
    let filteredData = this?.dataSource.filteredData?.filter(line => {
      let check = true
      filters.forEach(filter => {
        if (!filter.checkFilter(line)) check = false;
      })
      return check
    })
    this.displayDataSource.next(new MatTableDataSource(filteredData));
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
    let data= this.filterArrSource.getValue().map(filter => (filter.ordernumber === filterColumn.ordernumber ? filterColumn : filter))
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