import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FilterService } from 'src/app/services/filter.service';
import { FilterColumnValue, SelectFilterColumn } from 'src/app/models/filterColumns';

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {

  constructor(private filterService:FilterService) { }


  @Input() filterColumn!: SelectFilterColumn;
  selectedMethod:string=''
  stringFilterValue=''
  ngOnInit(): void {
  }

  onKeyUp(e: any){
    //TODO: filter method 
    this.stringFilterValue=e.target.value
  }

  saveFilter(){
        this.filterService.setFilter(new FilterColumnValue({...this.filterColumn, stringFilterValue:this.stringFilterValue}));

  }

}