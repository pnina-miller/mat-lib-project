
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subscription, fromEvent } from 'rxjs';
import { FilterColumn, FilterColumnValue } from '../models/filterColumns';
@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  public filterArrSource: BehaviorSubject<Array<FilterColumnValue>> = new BehaviorSubject(new Array<FilterColumnValue>())
  FilterArr = this.filterArrSource.asObservable()

  addFilter(filterColumn:FilterColumnValue) {
    this.filterArrSource.next(this.filterArrSource.getValue().concat(filterColumn));
  }

  setFilter(filterColumn:FilterColumnValue) {
    if (this.findFilter(filterColumn.ordernumber))
      this.replaceFilter(filterColumn);
    else
      this.addFilter(filterColumn);
  }

  replaceFilter(filterColumn:FilterColumnValue) {
    this.filterArrSource.next(this.filterArrSource.getValue().map(filter => (filter.ordernumber === filterColumn.ordernumber ?filterColumn : filter)));

  }

  removeFilter(ordernumber: string) {
    this.filterArrSource.next(this.filterArrSource.getValue().filter(filter => filter.ordernumber !== ordernumber));
  }

  findFilter(ordernumber: string) {
    return this.filterArrSource.getValue().find(filter => filter.ordernumber === ordernumber);
  }

  resetFilters() {
    this.filterArrSource.next([]);

  }
}