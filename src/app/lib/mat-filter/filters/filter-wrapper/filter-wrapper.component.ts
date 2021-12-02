import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { SelectFilterComponent } from '../select-filter/select-filter.component';
import { StringFilterComponent } from '../string-filter/string-filter.component';


@Component({
  selector: 'app-filter-wrapper',
  templateUrl: './filter-wrapper.component.html',
  styleUrls: ['./filter-wrapper.component.scss']
})
export class FilterWrapperComponent implements OnInit {

  @ViewChild('filterComponent') filterComponent!: StringFilterComponent | SelectFilterComponent

  @Input() filterColumn: any | undefined;
  @Input() displayedColumns: any | undefined;
  @Output() goBack: EventEmitter<any> = new EventEmitter();

  filterTypes = ['DATE', 'String', 'BOOLEAN', 'MULTISELECT', 'NUMERIC', 'SELECT'];
  filterTypes1={
  date:'date',
  string:'string'
  }

  filterSelectSymbol = []
  constructor() { }

  ngOnInit(): void {
  }

  back() {
    this.goBack.emit()
  }

  seveClick() {
    this.filterComponent.saveFilter();
  }

}
