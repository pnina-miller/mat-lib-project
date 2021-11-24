import { Component, ElementRef, Input, OnInit } from '@angular/core';
import {
  DateFilterColumn,
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
  constructor(private filterService: MatTableService,private elementRef: ElementRef, private dateFilterColumn:DateFilterColumn) {}

  ngOnInit(): void {}

  dateSelected(e: any) {
  
    if (this.selectedMethod === 'range' && this.filterValue) {
      this.filterValue2 && this.colorSelected(this.filterValue2,'white')
      this.colorSelected(e,'red')
      this.filterValue2 = e;
    }
    //TODO
    else{
      this.filterValue && this.colorSelected(this.filterValue,'white')
      this.colorSelected(e,'red')
       this.filterValue = e;
    }
  }
colorSelected(date:Date,color:string){
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const stringDate=`${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
   let el:any=document.querySelector(`.mat-calendar-body-cell[aria-label= "${stringDate}" ] .mat-calendar-body-cell-content`)
    if(el) el.style.backgroundColor=color;
    this.elementRef.nativeElement.style.setProperty('selectors', 'e');
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
