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

  selected!: Date; //= new Date();
  selected2!: Date; //= new Date();
  selectedMethod: string = 'in';
  methodOptions = DateFilterColumn.methodOptions;
  optionsArr = Object.entries(this.methodOptions);

  convertDate(date: Date) {
    return date?.toLocaleDateString().replace(/\./g, '/');
  }
  constructor(private filterService: MatTableService) {}

  ngOnInit(): void {}

  dateSelected(e: any) {
    if (this.selectedMethod === 'range' && this.selected) this.selected2 = e;
    //TODO
    else this.selected = e;
  }

  saveFilter() {
    let stringFilterValue = `${
      DateFilterColumn.methodOptions[this.selectedMethod].name
    } ${this.convertDate(this.selected)} ${this.selected2 ? '-'+this.convertDate(this.selected2) : ''}`;
    this.filterService.setFilter(
      new DateFilterColumn({
        ...this.filterColumn,
        stringFilterValue,
        filterMethodKey: this.selectedMethod,
        filterValue: this.selected,
        secondValueForRange: this.selected2,
      })
    );
  }
}
