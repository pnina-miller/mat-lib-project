import { Output, EventEmitter, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges,
  ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import {
  TableRow,
  TableField,
  PrintConfig,
  TableSetting,
  TablePagination,
  TablePaginationMode,
} from 'dynamic-mat-table';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  tableSettingsConfig,
  paginationConfig,
} from './simple-table.config';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatTableService } from './services/mat-table.service';
import { FilterColumn } from './models/filterColumns';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'matbea-dinamic-table',
  templateUrl: './matbea-table.component.html',
  styleUrls: ['./matbea-table.component.scss'],
})
export class MatbeaTableComponent implements OnInit, OnChanges {
  
  direction: 'ltr' | 'rtl' = 'ltr';
  showReloadData: boolean = true;
  rowHeight: number = 30;
  pending: boolean = false;
  setting: TableSetting = {};
  paginationMode: TablePaginationMode = 'client-side';
  showNoData: boolean = true;
  pagination: TablePagination = {};
  stickyHeader: boolean = false;
  printConfig: PrintConfig = {};
  showProgress: boolean = true;
  
  dataSource$: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  _dataSource: any;

  // mainColumnDisplay: any[] = [];
  // mainColumn: any[] = [];
  // isMainColumn: boolean = false;
  displayedColumns = [];
  // sub: Subscription;

  @ViewChild('dinamicTable') dinamicTable
  @Input('displayedColumns') displayedColumnsTemp: TableField<any>[];
  // @Input() paginatorOn: boolean = false;
  // @Input() loading = true;
  // @Input() messages: [];
  @Input() originalColumns=[]
  @Input() selectedRows: number[] = [];
  @Output() selectedRowsChange = new EventEmitter<number[]>();
  @Output() dataSourceChangeLength = new EventEmitter<number>();
  updateFilters: any;
  @Output() clickInRow = new EventEmitter();
  selectControl: FormControl = new FormControl();
  @Input() dataSource: any[] = [];
  @Input() navTo: string = null;
  @Output() row = new EventEmitter();
  @Input() name;
  _dataSource$ = new BehaviorSubject<any[]>([]);

  constructor(
    private cdref: ChangeDetectorRef,
    private router: Router,
    public dialog: MatDialog,
    private matTableService: MatTableService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource$.next(this.dataSource || []);
    this.cdref.detectChanges();
    this.tableOnChanges(changes);
  }

  ngOnInit(): void {
    this.initTable( this.displayedColumns, tableSettingsConfig, paginationConfig);
    this.selectControl.valueChanges.subscribe((value: boolean) => {
      Array.from({ length: this.dataSource?.length }).forEach((el, i) => {
        this.onRowSelected({ target: i, value });
      });
    });
  }

  initTable(columnsConfig: TableField<any>[], settingConfig: TableSetting, paginationConfig: TablePagination): void {
    // this.columns = columnsConfig;
    this.setting = settingConfig;
    this.pagination = paginationConfig;
  }

  changeHeaderMode() {
    this.stickyHeader = !this.stickyHeader;
  }

  table_onRowClick(e) {    
    if (e.event === 'DoubleClick') {
      const row = e.sender.row;
      console.clear();
      if (this.navTo) {
        this.router.navigate([this.navTo + row.rowId]);
      }
      this.row.emit(row);
    }
  }

  tableOnChanges(changes: SimpleChanges): void {
    console.log('SimpleChanges in matbea-table', this);
    this.dataSource$.subscribe((list) => {
        if (this.dataSource) this.dataSource = list || [];
        this._dataSource = list;
        // this.loading = false;
        this.selectedRows.forEach((i) => (this.dataSource[i].selectRow = true));
      });
    // this.isMainColumn = !!this.displayedColumnsTemp.find(col => !!col.subColumns);
    // this.mainColumn = this.displayedColumnsTemp.map(column => column.subColumns ? column : { name: column.name + column.index });
    // this.mainColumnDisplay = this.mainColumn.map((c) => c.columnnameenglish);
    let filtereCols = this.displayedColumnsTemp
    // .reduce((arr, col) => {
    //   let cols = col.subColumns || [col];
    //   return [...arr, ...cols];
    // }, []);

    this.displayedColumns = filtereCols;
    this.matTableService.init(this._dataSource, this.originalColumns.map((col) => new FilterColumn(col))
    );
    this.matTableService.displayDataSource.subscribe((data: any[]) => {
      this.dataSource = data;
      this._dataSource$.next(data);
      this.changeDetector.detectChanges();
      this.dataSourceChangeLength.emit(this.dataSource?.length);
    });
  }

  onRowSelected(event: any): void {
    if (this.dataSource[event.target]) {
      this.dataSource[event.target].selectRow = event.value;
    }
    if (event.value && !this.selectedRows.includes(event.target)) {
      this.selectedRows.push(event.target);
    } else {
      this.selectedRows.forEach((row, i) => {
        if (row === event.target) this.selectedRows.splice(i, 1);
      });
    }
    this.selectedRowsChange.emit(this.selectedRows);
  }

  selectMethod(event: any) {
    if (event.id === 1) {
      this.onRowSelected({ target: -1, value: true });
    } else {
      Array.from({ length: this.dataSource.length }).forEach((el, i) =>
        this.onRowSelected({ target: i, value: true })
      );
    }
  }
}
