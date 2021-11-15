import { Component, Input, OnInit } from '@angular/core';
import { NumericFilterColumn } from 'src/app/lib/models/filterColumns';
import { MatTableService } from 'src/app/lib/services/mat-table.service';

@Component({
  selector: 'app-numeric-filter',
  templateUrl: './numeric-filter.component.html',
  styleUrls: ['./numeric-filter.component.scss']
})
export class NumericFilterComponent implements OnInit {

  constructor(private filterService: MatTableService) { }


  @Input() filterColumn!: NumericFilterColumn;
  methodOptions = NumericFilterColumn.methodOptions;
  optionsArr = Object.entries(this.methodOptions)

  selectedMethod: string = ''
  filterValue = ''

  ngOnInit(): void {
  }

  onKeyUp(e: any) {
    //TODO: clean this up
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


  saveFilter() {
    let stringFilterValue = `${this.methodOptions[this.selectedMethod].name} ${this.filterValue} `;
    this.filterService.setFilter(new NumericFilterColumn({ ...this.filterColumn, filterValue: this.filterValue, filterMethodKey: this.selectedMethod, stringFilterValue }));

  }

}
