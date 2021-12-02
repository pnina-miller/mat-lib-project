import { Component, OnInit, Input } from '@angular/core';
import {MatTableService} from "../../../services/mat-table.service";
import {MultiSelectFilterColumn} from "../../../models/filterColumns";

@Component({
  selector: 'app-multi-select-filter',
  templateUrl: './multi-select-filter.component.html',
  styleUrls: ['./multi-select-filter.component.scss']
})
export class MultiSelectFilterComponent implements OnInit {

  constructor(private filterService:MatTableService) { }

  @Input() filterColumn!: MultiSelectFilterColumn;
  options!: String[];
  selected: String[]=[];
  stringFilterValue=''

  ngOnInit(): void {
    this.options=this.filterColumn.options
  }

  onChange(e: any){
    this.selected.push(e.source.value)
  }

  saveFilter(){
    this.stringFilterValue=this.selected.join(', ')
    this.filterService.setFilter(new MultiSelectFilterColumn({...this.filterColumn,stringFilterValue:this.stringFilterValue, selectedOptions:this.selected}))

  }

  /*TODO: onBooleanChange(e: any,item:String){
    if(e.checked)
    this.filterService.addFilter(this.filterColumn.ordernumber, item)
    else
    this.filterService.removeFilter(item)

  }*/
}


