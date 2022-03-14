import { Component, OnInit } from '@angular/core';
import {
  TableRow,
  TableField,
  PrintConfig,
  TableSetting,
  TablePagination,
  TablePaginationMode,
} from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import {
  tableColumnsConfig,
  tableSettingsConfig,
  paginationConfig,
} from './simple-table.config';
import { DATA } from './simple-table.model';

@Component({
  selector: 'app-simple-table',
  templateUrl: './simple-table.component.html',
  styleUrls: ['./simple-table.component.css'],
})
export class SimpleTableComponent implements OnInit {
  columns!: TableField<any>[];

  direction: 'ltr' | 'rtl' = 'ltr';

  showReloadData: boolean = true;

  rowHeight: number = 40;

  pending: boolean = false;

  setting: TableSetting = {};

  paginationMode: TablePaginationMode = 'client-side';

  showNoData: boolean = true;

  dataSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  pagination: TablePagination = {};

  stickyHeader: boolean = false;

  printConfig: PrintConfig = {};

  showProgress: boolean = true;

  dataPlayName: 'clear data' | 'fetch data' = 'clear data';

  noDataBtn:boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.initTable(tableColumnsConfig, tableSettingsConfig, paginationConfig);
    this.dataSource.next(DATA);
  }

  initTable(
    columnsConfig: TableField<any>[],
    settingConfig: TableSetting,
    paginationConfig: TablePagination
  ): void {
    this.columns = columnsConfig;
    this.setting = settingConfig;
    this.pagination = paginationConfig;
  }

  dataPlay(): void {
    if (this.dataSource.value !== DATA) {
      this.dataSource.next(DATA);
      this.dataPlayName = 'clear data';
    } else if (this.dataSource.value === DATA) {
      this.dataSource.next([]);
      this.dataPlayName = 'fetch data';
    }

    this.noDataBtn = !this.noDataBtn;
  }

  changeHeaderMode(){
    this.stickyHeader = !this.stickyHeader;
  }
}
