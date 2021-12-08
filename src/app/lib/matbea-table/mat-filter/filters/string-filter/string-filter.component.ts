import { Component, Input } from '@angular/core';
import {MatTableService} from "../../../services/mat-table.service";
import {StringFilterColumn} from "../../../models/filterColumns";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-string-filter',
  templateUrl: './string-filter.component.html',
  styleUrls: ['./string-filter.component.scss']
})
export class StringFilterComponent {

  constructor(private filterService:MatTableService, stringFilterColumn:StringFilterColumn) {
    this.methodOptions = stringFilterColumn.methodOptions;
    this.optionsArr = Object.entries(this.methodOptions);
    this.selectedMethod=this.optionsArr[0][0]//contain

   }
   
  @Input() filterColumn!: StringFilterColumn;

  selectedMethod:string='contain'
  methodOptions:any
  optionsArr:any[]

inputFormControl=new FormControl('',Validators.required)
errorMessages={required:'יש למלא שדה זה.'}


  saveFilter(){
    if(this.inputFormControl.valid){
    const filterValue=this.inputFormControl.value
    const stringFilterValue=`${this.methodOptions[this.selectedMethod].name} ${filterValue} `;
    this.filterService.setFilter(new StringFilterColumn({...this.filterColumn, filterValue:filterValue, filterMethodKey:this.selectedMethod, stringFilterValue}));
    }
  }

}