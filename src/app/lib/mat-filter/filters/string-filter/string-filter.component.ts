import { Component, Input, OnInit } from '@angular/core';
import {MatTableService} from "../../../services/mat-table.service";
import {StringFilterColumn} from "../../../models/filterColumns";

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent implements OnInit {

  constructor(private filterService:MatTableService, stringFilterColumn:StringFilterColumn) {
    this.methodOptions = stringFilterColumn.methodOptions;
    this.optionsArr = Object.entries(this.methodOptions);
    this.selectedMethod=this.optionsArr[0][0]//'contain

   }


  @Input() filterColumn!: StringFilterColumn;
  selectedMethod:string='contain'
  filterValue=''
  methodOptions:any
  optionsArr:any[]
  ngOnInit(): void {
  }

  onKeyUp(e: any){
    this.filterValue=e.target.value
  }

  saveFilter(){
    let stringFilterValue=`${this.methodOptions[this.selectedMethod].name} ${this.filterValue} `;
        this.filterService.setFilter(new StringFilterColumn({...this.filterColumn, filterValue:this.filterValue, filterMethodKey:this.selectedMethod, stringFilterValue:stringFilterValue}));

  }

}