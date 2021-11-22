import { Component, Input, OnInit } from '@angular/core';
import { NumericFilterColumn } from 'src/app/lib/models/filterColumns';
import { MatTableService } from 'src/app/lib/services/mat-table.service';

@Component({
  selector: 'app-numeric-filter',
  templateUrl: './numeric-filter.component.html',
  styleUrls: ['./numeric-filter.component.scss']
})
export class NumericFilterComponent implements OnInit {

  constructor(private filterService: MatTableService, private numericFilterColumn:NumericFilterColumn) { 
    this.methodOptions = this.numericFilterColumn.methodOptions;
    this.optionsArr = Object.entries(this.methodOptions)
    this.selectedMethod=this.optionsArr[1][0]//equal
  }


  @Input() filterColumn: NumericFilterColumn | undefined;

  methodOptions:any;
  optionsArr:any[];

  selectedMethod: string = ''
  filterValue = ''
  filterValue2 = ''

  ngOnInit(): void {
  }

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


  saveFilter() {
    let stringFilterValue = `${this.methodOptions[this.selectedMethod]?.name}  ${this.filterValue}
     ${this.filterValue2 ? '-'+this.filterValue2 : ''} `;
    this.filterService.setFilter(new NumericFilterColumn({ ...this.filterColumn, filterValue: this.filterValue, filterMethodKey: this.selectedMethod, stringFilterValue, secondValueForRange:this.filterValue2 }));

  }

}
