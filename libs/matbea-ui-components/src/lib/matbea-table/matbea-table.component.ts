import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnChanges, Output, EventEmitter, ChangeDetectorRef, ViewContainerRef, ComponentFactoryResolver, ViewChildren, QueryList
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ColumnDefinition } from '../models/column-definition.model';
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { MatDialog } from "@angular/material/dialog";
import { MatTableService } from "./services/mat-table.service";
import { FilterColumn } from "./models/filterColumns";
import { MatTableDataSource } from "@angular/material/table";
import { FormControl } from '@angular/forms';
import {TableVirtualScrollDataSource} from 'ng-table-virtual-scroll';
import { MatbeaTableHeaderCellComponent } from './matbea-table-header-cell/matbea-table-header-cell.component';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'matbea-table',
  templateUrl: './matbea-table.component.html',
  styleUrls: ['./matbea-table.component.scss'],
  providers:[MatTableService]
})

export class MatbeaTableComponent implements OnInit, AfterViewInit, OnChanges {
  dataSource: any = new MatTableDataSource([]);
  _dataSource: any;
  columsToDisplay: string[] = [];
  displayedColumns: ColumnDefinition[];
  sub: Subscription;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
 @ViewChildren(MatbeaTableHeaderCellComponent) tableHeaderCellComponent: QueryList<MatbeaTableHeaderCellComponent>;
 @ViewChild(CdkVirtualScrollViewport) virtualScroll: CdkVirtualScrollViewport;

  mainColumnDisplay: any[] = [];
  mainColumn: any[] = [];
  isMainColumn: boolean = false;
  position=0;
save(){
  this.position=this.virtualScroll.getRenderedRange().start;
}
scroll(){
  this.ngOnChanges({})
  this.virtualScroll.scrollToIndex(this.position);
}
  ngAfterViewInit() {
    if (this.dataSource.data) {
    if(this.dataSource.data[0]){
      this.displayedColumns.forEach((col,index)=>{
        if(col.dynamicHeaderCellComponent){debugger
           const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.displayedColumns[index].dynamicHeaderCellComponent);
      this.tableHeaderCellComponent.get(index).viewContainerRef.clear()
      const componentRef = this.tableHeaderCellComponent.get(index).viewContainerRef.createComponent(componentFactory);
      (componentRef.instance as any).tableData=this;
        }
      })
     

    }
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.filter
    }
  }

  @Input() name
  @Input('displayedColumns') displayedColumnsTemp: ColumnDefinition[];
  @Input() dataSource$: Observable<any>;
  @Input() navTo: string = null;
  @Input() paginatorOn: boolean = false;
  @Input() loading = true;
  @Input() messages: [];
  @Input() selectedRows: number[] = [];
  @Output() selectedRowsChange = new EventEmitter<number[]>();
  @Output() row = new EventEmitter();
  @Output() dataSourceChangeLength = new EventEmitter<number>();
  updateFilters: any;
  @Output() clickInRow = new EventEmitter();
  selectControl: FormControl = new FormControl();

  constructor(private router: Router, private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private componentFactoryResolver: ComponentFactoryResolver,
    private matTableService: MatTableService, private changeDetector: ChangeDetectorRef,  public viewContainerRef:ViewContainerRef) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("SimpleChanges in matbea-table", this);
      this.dataSource$.subscribe((list) => {
        // if (this.dataSource) this.dataSource.data = list || [];
        this._dataSource = list;
        this.loading=false;
        this.selectedRows.forEach(i => this._dataSource.filteredData[i].selectRow = true)
    this.isMainColumn = !!this.displayedColumnsTemp.find(col => !!col.subColumns)
    this.mainColumn = this.displayedColumnsTemp.map(column => column.subColumns ? column : { columnnameenglish: column.columnnameenglish + column.ordernumber })
    this.mainColumnDisplay = this.mainColumn.map(c => c.columnnameenglish)
    let filtereCols = this.displayedColumnsTemp.reduce((arr, col) => {
      let cols = col.subColumns || [col]
      return [...arr, ...cols]
    }, []);

    this.columsToDisplay = filtereCols/*this.displayedColumnsTemp*/.filter(e => true)// e.display == '1';
      .sort((a, b) => Number(a.ordernumber) - Number(b.ordernumber)).map((e) => e.columnnameenglish);
    this.displayedColumns = filtereCols//this.displayedColumnsTemp;
   this.matTableService.init('', '', this._dataSource, this.displayedColumns.map((col) => new FilterColumn(col)));
      });
       this.matTableService.displayDataSource.subscribe(data => {
      // this.dataSource = data;
      this.dataSource = new TableVirtualScrollDataSource(data.data);

      this.changeDetector.detectChanges();
      this.dataSourceChangeLength.emit(this.dataSource?.data?.length);

    this.ngAfterViewInit();
    })

  }

  ngOnInit(): void {
    console.log("OnInit in matbea-table", this);
    this.selectControl.valueChanges.subscribe((value: boolean) => { Array.from({ length: this.dataSource?.filteredData.length }).forEach((el, i) => { this.onRowSelected({ target: i, value }) }) })
  }
  onClick(row: any): void {
    console.clear();
    console.log(row);
    let id = row.id;
    if (this.navTo) {
      this.save();
      this.router.navigate([this.navTo + id]);
    }
    this.row.emit(row);

  }

  onRowSelected(event: any): void {
    if(this.dataSource.filteredData[event.target]){
      this.dataSource.filteredData[event.target].selectRow = event.value
    }
    if (event.value && !this.selectedRows.includes(event.target)) {
      this.selectedRows.push(event.target);
    } else {
      this.selectedRows.forEach((row, i) => { if (row === event.target) this.selectedRows.splice(i, 1); });
    }
    this.selectedRowsChange.emit(this.selectedRows)
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
