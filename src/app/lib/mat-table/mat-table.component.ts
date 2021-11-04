import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, OnInit, Input, Inject, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterService } from 'src/app/services/filter.service';
import { FilterColumnValue } from 'src/app/models/filterColumns';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort = new MatSort;


  @Input() dataSource!: MatTableDataSource<any>;
  displayDataSource: MatTableDataSource<any> = this.dataSource;

  displayedColumns!: string[];
  filterArr!: Array<FilterColumnValue>





  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private filterService: FilterService) { }


  ngOnInit(): void {
    this.displayDataSource = this.dataSource
    this.displayedColumns = Object.keys(this.dataSource?.filteredData[0]);
    this.filterService.FilterArr.subscribe(data => this.filterArrChanged(data))

  }


  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  filterArrChanged(data: Array<FilterColumnValue>) {
    this.filterArr = data
    let filteredData = this?.dataSource?.filteredData?.filter(line => line[data[0]?.columnnamehebrew] === data[0]?.stringFilterValue)
    this.displayDataSource = new MatTableDataSource(filteredData);
  }
  announceSortChange(sortState: any) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
