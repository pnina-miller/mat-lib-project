import { Component, Input, OnInit } from '@angular/core';
import {
  DateFilterColumn,
  StringFilterColumn,
} from 'src/app/lib/models/filterColumns';
import { MatTableService } from 'src/app/lib/services/mat-table.service';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss'],
})
export class DateFilterComponent implements OnInit {
  @Input() filterColumn: DateFilterColumn | undefined;

  filterValue!: Date; //= new Date();
  filterValue2!: Date; //= new Date();
  methodOptions = this.dateFilterColumn.methodOptions;
  optionsArr = Object.entries(this.methodOptions);
  selectedMethod: string = this.optionsArr[0][0] || 'in';

  convertDate(date: Date) {
    return date?.toLocaleDateString().replace(/\./g, '/');
  }
  constructor(private filterService: MatTableService, private dateFilterColumn:DateFilterColumn) {}

  ngOnInit(): void {}

  dateSelected(e: any) {
    if (this.selectedMethod === 'range' && this.filterValue) this.filterValue2 = e;
    //TODO
    else this.filterValue = e;
  }

  saveFilter() {
    let stringFilterValue = `${
      this.dateFilterColumn.methodOptions[this.selectedMethod].name
    } ${this.convertDate(this.filterValue)} ${this.filterValue2 ? '-'+this.convertDate(this.filterValue2) : ''}`;
    this.filterService.setFilter(
      new DateFilterColumn({
        ...this.filterColumn,
        stringFilterValue,
        filterMethodKey: this.selectedMethod,
        filterValue: this.filterValue,
        secondValueForRange: this.filterValue2,
      })
    );
  }
}
