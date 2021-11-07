import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { MatTableService } from 'src/app/services/mat-table.service';
import { FilterColumn, SelectFilterColumn } from 'src/app/models/filterColumns';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-select-filter',
  templateUrl: './select-filter.component.html',
  styleUrls: ['./select-filter.component.scss']
})
export class SelectFilterComponent implements OnInit {

  constructor(private filterService:MatTableService) { }

  @Input() filterColumn!: SelectFilterColumn;
  options!: FormGroup;
  hideRequiredControl = new FormControl(false);
  stringFilterValue=''

  ngOnInit(): void {
    this.options=new FormGroup({hideRequiredControl:this.hideRequiredControl})
  }

  onChange(e: any){
    this.stringFilterValue=e.value
  }

  saveFilter(){
    this.filterService.setFilter(new FilterColumn({...this.filterColumn,stringFilterValue:this.stringFilterValue}))

  }

  /*TODO: onBooleanChange(e: any,item:String){
    if(e.checked)
    this.filterService.addFilter(this.filterColumn.ordernumber, item)
    else
    this.filterService.removeFilter(item)

  }*/
}


