import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, OnInit, Input, Inject, ElementRef, SimpleChanges, OnChanges, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableService } from 'src/app/lib/services/mat-table.service';
import { FilterColumn } from 'src/app/lib/models/filterColumns';
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss']
})
export class MatTableComponent implements OnInit {

  @Input() tableDataSource!: any[];
  @Input() columnDefinitions!: any[]

  @Input() tableDataSourceUrl!: string;
  @Input() columnDefinitionsUrl!: string;

  displayDataSource!: MatTableDataSource<any>;
  displayedColumns: string[]=[''];
  cols!:any
  filterArr!: Array<FilterColumn>

  constructor(public matTableService: MatTableService) { }


  ngOnInit(): void {
    this.matTableService.init(this.tableDataSourceUrl, this.columnDefinitionsUrl, this.tableDataSource, this.columnDefinitions);
    this.matTableService.displayDataSource.subscribe(data=>this.displayDataSource = data)
    this.matTableService.displayedColumns.subscribe(data=>{this.displayedColumns = data; })
    this.matTableService.columnDefinitions.subscribe(data=>{this.cols =  data.reduce<any>(
      (filtered, option) =>
        option.columnnameenglish
          ? {...filtered, [option.columnnameenglish.trim()]:option.columnnamehebrew}
          : filtered,
      {});
    })
  }
}
