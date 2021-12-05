import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableService } from '../services/mat-table.service';
import { FilterColumn } from '../models/filterColumns';

@Component({
  selector: 'matbea-filter-chips-wrapper',
  templateUrl: './filter-chips-wrapper.component.html',
  styleUrls: ['./filter-chips-wrapper.component.scss']
})
export class FilterChipsWrapperComponent implements OnInit {

  filterArr!:Array<FilterColumn>

  removable=true;

  constructor(private filterService:MatTableService,private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void { 
    this.filterService.FilterArr.subscribe(data=>{this.filterArr=data; this.changeDetectorRef.detectChanges()})
  }

  removeFilter(item:FilterColumn){
    this.filterService.removeFilter(item.ordernumber)
  }

  resetFilters(){
    this.filterService.resetFilters()
  }
}
