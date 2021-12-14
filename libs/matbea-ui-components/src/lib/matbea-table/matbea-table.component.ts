import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild,
  OnChanges,
  OnDestroy, Output, EventEmitter, ChangeDetectorRef
} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, Sort} from '@angular/material/sort';
import {Observable, Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {ActivatedRoute, Router} from '@angular/router';
import {ColumnDefinition} from '../models/column-definition.model';
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatDialog} from "@angular/material/dialog";
import {MatTableService} from "./services/mat-table.service";
import {FilterColumn} from "./models/filterColumns";


@Component({
  selector: 'matbea-table',
  templateUrl: './matbea-table.component.html',
  styleUrls: ['./matbea-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MatbeaTableComponent implements OnInit, AfterViewInit, OnChanges {
  dataSource: any;
  _dataSource: any;
  columsToDisplay: string[] = [];
  displayedColumns!: ColumnDefinition[];
  sub!: Subscription;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    if (this.dataSource?.data) {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // this.loading = false;
      this.dataSource.filter
    }
  }

  @Input('displayedColumns') displayedColumnsTemp!: ColumnDefinition[];
  @Input() dataSource$!: Observable<any>;
  @Input() navTo: string = null;
  @Input() paginatorOn: boolean = false;
  @Input() loading = true;
  @Input() messages!:[];
  @Output() row= new EventEmitter();
  updateFilters: any;

  constructor(private route: ActivatedRoute, private router: Router,private _liveAnnouncer: LiveAnnouncer,
  public dialog: MatDialog,
  private changeDetector: ChangeDetectorRef,
  public matTableService: MatTableService) {
    // this.dataSource = new MatTableDataSource([]);
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log("SimpleChanges in matbea-table", this);

    this.columsToDisplay = this.displayedColumnsTemp.filter(e => {
      return e.display == '1';
    }).sort((a, b) => {
      return Number(a.ordernumber) - Number(b.ordernumber)
    }).map((e) => e.columnnameenglish);
    this.displayedColumns = this.displayedColumnsTemp;
    this.matTableService.init('','',this._dataSource,this.displayedColumns.map((col)=> new FilterColumn(col)));
    this.matTableService.displayDataSource.subscribe(data=>{this.dataSource = data;this.changeDetector.detectChanges()})
    this.ngAfterViewInit();

  }

  ngOnInit(): void {
    console.log("OnInit in matbea-table", this);
    this.matTableService.loadDataSource('http://localhost:8080/shofar/combobox').subscribe((list:any) => {
      if(this.dataSource) this.dataSource.data = list.data.projectStatusCombo;
      this._dataSource=list;
      this.matTableService.init('','',this._dataSource,this.displayedColumns.map((col)=> new FilterColumn(col)));

    });
  }

  onClick(row: any): void {
    console.clear();
    console.log(row);
    let id = row.id;
    this.router.navigate([this.navTo + id]);
    this.row.emit(row);

  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
