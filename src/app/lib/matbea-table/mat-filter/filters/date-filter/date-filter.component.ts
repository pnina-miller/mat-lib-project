import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCalendar } from '@angular/material/datepicker';
import { DateFilterColumn } from '../../../models/filterColumns';
import { MatTableService } from '../../../services/mat-table.service';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss'],
})
export class DateFilterComponent implements OnInit {
  @Input() filterColumn: DateFilterColumn | undefined;
  @ViewChild(MatCalendar, { static: false }) calendar!: MatCalendar<Date>;

  filterValue: Date[] = [];

  methodOptions = this.dateFilterColumn.methodOptions;
  optionsArr = Object.entries(this.methodOptions).map((option: any[]) => ({
    id: option[0],
    value: option[1].name,
  }));

  selectedMethod: string = this.optionsArr[0].id || 'in';

  inputFocused: number = 0;

  inputFormControl = new FormControl();
  inputFormControl2 = new FormControl();

  constructor(
    private filterService: MatTableService,
    private elementRef: ElementRef,
    private dateFilterColumn: DateFilterColumn,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.inputFormControl.setValue('mm/dd/yyyy');
    this.inputFormControl2.setValue('mm/dd/yyyy');
  }

  convertDate(date: Date) {
    const arr = date?.toLocaleDateString().split('.');
    return `${arr[1]}/${arr[0]}/${arr[2]}`;
  }

  onDateKeyUp(input: FormControl) {
    let correctDd,
      correctMm,
      correctYyyy = '';
    let dateArr = new Array(3).fill('');

    input.value.split('/').forEach((y: any, index: number) => {
      dateArr[index] = dateArr[index] + y.replace(/[^\d\/]+/g,'') ;
      dateArr[index + 1] = dateArr[index].slice(2) + (dateArr[index + 1] || '');
    });
    correctMm = dateArr[0]?.slice(0, 2);
    if (Number(correctMm > 12)) correctMm = '12';
    correctDd = dateArr[1]?.slice(0, 2);
    if (Number(correctDd) > 31) correctDd = '31';
    correctYyyy = dateArr[2].slice(0, 4);

    const dateString = `${correctMm || 'mm'}/${correctDd || 'dd'}/${correctYyyy || 'yyyy'}`;
    input.setValue(dateString);
  }

  inputClick(input: FormControl, f: number) {
    this.inputFocused = f;
    this.updateFilterValue(new Date(input.value));
  }

  inputChange(input: FormControl, f: number) {
    input.setValue(this.convertDate(new Date(input.value.replace(/[a-z]+/g, '1'))));
    this.inputClick(input, f);
  }

  dateSelected(date: Date, input: FormControl, f: number) {
    input.setValue(this.convertDate(date));
    this.updateFilterValue(date);
  }
  
  updateFilterValue(date: Date) {
    if (date.getTime()) {
      this.calendar.activeDate = date;
      this.filterValue[this.inputFocused] &&
        this.colorSelected(this.filterValue[this.inputFocused], 'white');
      this.filterValue[this.inputFocused] = date;
      setTimeout(() => this.colorSelected(date, 'red'), 1);
    }
  }

  colorSelected(date: Date, color: string) {
    const stringDate = `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    const el: any = document.querySelector(
      `.mat-calendar-body-cell[aria-label= "${stringDate}" ] .mat-calendar-body-cell-content`
    );
    if (el) el.style.backgroundColor = color;
    else console.log('date ' + stringDate + ' not found');
  }

  saveFilter() {
    let stringFilterValue = `${
      this.dateFilterColumn.methodOptions[this.selectedMethod].name
    } ${this.convertDate(this.filterValue[0])} ${
      this.filterValue[1] ? '-' + this.convertDate(this.filterValue[1]) : ''
    }`;
    this.filterService.setFilter(
      new DateFilterColumn({
        ...this.filterColumn,
        stringFilterValue,
        filterMethodKey: this.selectedMethod,
        filterValue: this.filterValue[0],
        secondValueForRange: this.filterValue[1],
      })
    );
  }
}
