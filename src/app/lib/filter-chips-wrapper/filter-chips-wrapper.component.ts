import { Component, OnInit } from '@angular/core';
import { MatTableService } from '../services/mat-table.service';
import { FilterColumn } from '../models/filterColumns';

@Component({
  selector: 'app-filter-chips-wrapper',
  templateUrl: './filter-chips-wrapper.component.html',
  styleUrls: ['./filter-chips-wrapper.component.scss']
})
export class FilterChipsWrapperComponent implements OnInit {

  filterArr!:Array<FilterColumn>

  removable=true;

  constructor(private filterService:MatTableService) { }

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
