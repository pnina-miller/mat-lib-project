import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FilterColumn } from 'src/app/models/filterColumns';
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
