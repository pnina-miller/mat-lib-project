import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatTableService} from "../../../services/mat-table.service";
import {SelectFilterColumn} from "../../../models/filterColumns";
import { RadioButtonTabEntry } from 'libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.component';

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
  optionsArr:RadioButtonTabEntry[];
  valid:boolean = true;

  ngOnInit(): void {
    this.options=new FormGroup({hideRequiredControl:this.hideRequiredControl});
    this.optionsArr=this.filterColumn.options.map(option=>({id:option,description:option}));
  }

  onChange(value: any){debugger
    this.stringFilterValue=value
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

