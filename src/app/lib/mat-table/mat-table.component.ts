import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, OnInit, Input, Inject, ElementRef, SimpleChanges, OnChanges, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableService } from 'src/app/services/mat-table.service';
import { FilterColumn } from 'src/app/models/filterColumns';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit, OnChanges {

  @ViewChild(MatSort) sort: MatSort = new MatSort;


  @Input() displayDataSource!: MatTableDataSource<any>;

  displayedColumns!: string[];
  filterArr!: Array<FilterColumn>

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private filterService: MatTableService,       private changeDetector: ChangeDetectorRef,    ) { }


  ngOnInit(): void {
    this.displayedColumns = Object.keys(this.displayDataSource?.filteredData[0] || {});
  }

  ngOnChanges(c: SimpleChanges){
    this.displayDataSource = this.displayDataSource
    this.displayedColumns = Object.keys(this.displayDataSource?.filteredData[0] || {'':''});
  }
  ngAfterViewInit() {
    this.displayDataSource.sort = this.sort;
  }

  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
