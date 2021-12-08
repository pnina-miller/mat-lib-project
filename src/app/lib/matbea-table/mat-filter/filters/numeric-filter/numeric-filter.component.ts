import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableService } from "../../../services/mat-table.service";
import { NumericFilterColumn } from "../../../models/filterColumns";
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-numeric-filter',
  templateUrl: './numeric-filter.component.html',
  styleUrls: ['./numeric-filter.component.scss']
})
export class NumericFilterComponent implements OnChanges {

  constructor(private filterService: MatTableService, private numericFilterColumn: NumericFilterColumn) {
    this.methodOptions = this.numericFilterColumn.methodOptions;
    this.optionsArr = Object.entries(this.methodOptions).map((option:any[])=>({ id: option[0], value: option[1].name}));
    this.selectedMethod = this.optionsArr[1][0]//equal
  }


  @Input() filterColumn: NumericFilterColumn | undefined;

  methodOptions: any;
  optionsArr: any[];
  selectedMethod: string = ''

  inputSuffix = '';

  inputFormControl = new FormControl('', Validators.required)
  inputFormControl2 = new FormControl('', Validators.required)
  errorMessages = { required: 'יש למלא שדה זה.' }

  ngOnChanges(): void {
    this.inputSuffix = this.filterColumn?.columnformatter === "PERCENT" ? '%' : ''
  }
  /*
      //TODO: clean this up
    onKeyUp(e: any) {
      let isPercent = e.target.value.indexOf('%')
      let value = e.target.value.replace(/,/g, '')
       value =value.replace(/%/g, '')
      if (value === ' ' || isNaN(Number(value))) {
        value = this.filterValue;
      }
      this.filterValue = value
      let arr = value.split('.')
      arr[0] = Number(arr[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      value = arr.join('.')
      if (isPercent>-1)
        value = value + '%'
      e.target.value = value
  
    }
    onKeyUp2(e: any) {
      //TODO: clean this up
      let isPercent = e.target.value.indexOf('%')
      let value = e.target.value.replace(/,/g, '')
       value =value.replace(/%/g, '')
      if (value === ' ' || isNaN(Number(value))) {
        value = this.filterValue2;
      }
      this.filterValue2 = value
      let arr = value.split('.')
      arr[0] = Number(arr[0]).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      value = arr.join('.')
      if (isPercent>-1)
        value = value + '%'
      e.target.value = value
  
    }
  
  */

  saveFilter() {
    if (this.inputFormControl.valid && this.inputFormControl2.valid) {
      const filterValue = this.inputFormControl.value
      const secondValueForRange = this.inputFormControl2.value
      let stringFilterValue = `${this.methodOptions[this.selectedMethod]?.name}  ${filterValue}
     ${secondValueForRange && this.selectedMethod === 'range' ? '-' + secondValueForRange : ''} `;
      this.filterService.setFilter(new NumericFilterColumn({ ...this.filterColumn, filterValue, filterMethodKey: this.selectedMethod, stringFilterValue, secondValueForRange }));
    }
  }

}
