import { Component, Input, OnInit } from '@angular/core';
import { DateFilterColumn, StringFilterColumn } from 'src/app/lib/models/filterColumns';
import { MatTableService } from 'src/app/lib/services/mat-table.service';

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.scss']
})
export class DateFilterComponent implements OnInit {

  selected: Date = new Date();
  selected2: Date = new Date();
  @Input() filterColumn!: DateFilterColumn;
  selectedMethod: string='in';
  methodOptions =DateFilterColumn.methodOptions;
optionsArr=Object.entries(this.methodOptions)

  constructor(private filterService: MatTableService) { }

  ngOnInit(): void {
  }

  selectedChange(value:Date){
    //TODO: support date range
    // if(this.selectedMethod==='range' && this.selected)  this.selected2=value;
    //else
     this.selected = value;
  }

  saveFilter() {
    let stringFilterValue= DateFilterColumn.methodOptions[this.selectedMethod].name + ' ' + this.selected?.toDateString()
    this.filterService.setFilter(new DateFilterColumn({ ...this.filterColumn, stringFilterValue , filterMethodKey: this.selectedMethod, filterValue: this.selected?.toDateString() }));
  }

}
