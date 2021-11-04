import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { FilterColumn, FilterColumnValue } from '../../models/filterColumns';

@Component({
  selector: 'app-filter-chips-wrapper',
  templateUrl: './filter-chips-wrapper.component.html',
  styleUrls: ['./filter-chips-wrapper.component.scss']
})
export class FilterChipsWrapperComponent implements OnInit {

  filterArr!:Array<FilterColumnValue>

  removable=true;

  constructor(private filterService:FilterService) { 
  }

  ngOnInit(): void {
    this.filterService.FilterArr.subscribe(data=>this.filterArr=data)
  }

  removeFilter(item:FilterColumn){
    this.filterService.removeFilter(item.ordernumber)
  }

  resetFilters(){
    this.filterService.resetFilters()
  }
}
