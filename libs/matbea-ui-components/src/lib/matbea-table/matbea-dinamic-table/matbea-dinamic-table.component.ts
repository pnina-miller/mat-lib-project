import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  TableRow,
  TableField,
  PrintConfig,
  TableSetting,
  TablePagination,
  TablePaginationMode,
  TableVirtualScrollDataSource,
} from 'dynamic-mat-table';
import { BehaviorSubject } from 'rxjs';
import {
  tableColumnsConfig,
  tableSettingsConfig,
  paginationConfig,
} from './simple-table.config';
import { DATA } from './simple-table.model';

@Component({
  selector: 'matbea-dinamic-table',
  templateUrl: './matbea-dinamic-table.component.html',
  styleUrls: ['./matbea-dinamic-table.component.scss']
})
export class MatbeaDinamicTableComponent implements OnInit, OnChanges {
  columns!: TableField<any>[];

  direction: 'ltr' | 'rtl' = 'ltr';

  showReloadData: boolean = true;

  rowHeight: number = 40;

  pending: boolean = false;

  setting: TableSetting = {};

  paginationMode: TablePaginationMode = 'client-side';

  showNoData: boolean = true;

  dataSource//: BehaviorSubject<any> = new BehaviorSubject<any>([]);

  pagination: TablePagination = {};

  stickyHeader: boolean = false;

  printConfig: PrintConfig = {};

  showProgress: boolean = true;

  dataPlayName: 'clear data' | 'fetch data' = 'clear data';

  noDataBtn:boolean = false;

@Input() displayedColumns=tableColumnsConfig
@Input() idataSource=DATA;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {; 
    this.dataSource=new TableVirtualScrollDataSource(this.idataSource || [])
    // this.dataSource.next(this.idataSource || []);
  }

  ngOnInit(): void {
    this.initTable(this.displayedColumns, tableSettingsConfig, paginationConfig);
   
  }

  initTable(
    columnsConfig: TableField<any>[],
    settingConfig: TableSetting,
    paginationConfig: TablePagination
  ): void {debugger
    this.columns = columnsConfig;
    this.setting = settingConfig;
    this.pagination = paginationConfig;
  }

  dataPlay(): void {
    if (this.dataSource.value !== this.idataSource) {
      this.dataSource.next(this.idataSource);
      this.dataPlayName = 'clear data';
    } else if (this.dataSource.value === this.idataSource) {
      this.dataSource.next([]);
      this.dataPlayName = 'fetch data';
    }

    this.noDataBtn = !this.noDataBtn;
  }

  changeHeaderMode(){
    this.stickyHeader = !this.stickyHeader;
  }
}
