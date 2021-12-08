import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatTableService} from "../../../services/mat-table.service";
import {SelectFilterColumn} from "../../../models/filterColumns";

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

  valid:boolean = true;

  ngOnInit(): void {
    this.options=new FormGroup({hideRequiredControl:this.hideRequiredControl})
  }

  onChange(e: any){
    this.stringFilterValue=e.value
  }

  saveFilter(){
    if(!this.stringFilterValue){
      this.valid=false;
      return;
    }
    this.valid=true;
    this.filterService.setFilter(new SelectFilterColumn({...this.filterColumn,stringFilterValue:this.stringFilterValue,filterValue:this.stringFilterValue}))

  }

  /*TODO: onBooleanChange(e: any,item:String){
    if(e.checked)
    this.filterService.addFilter(this.filterColumn.ordernumber, item)
    else
    this.filterService.removeFilter(item)

  }*/
}


