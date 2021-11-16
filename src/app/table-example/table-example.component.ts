import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild, OnInit, Input, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { FilterPopupComponent } from '../lib/mat-filter/filter-popup/filter-popup.component';
import { IfilterValues } from '../table.inteface';
import * as columnDefination from '../../assets/data/tableColumns.json'
import * as dataSourch from '../../assets/data/dataSource.json'


@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class tableExampleComponent implements OnInit {

  tableDataSourceUrl: string = 'assets/data/dataSource.json';
  columnDefinitionsUrl: string = 'assets/data/tableColumns.json';
  tableDataSource = Object.values(dataSourch)
  columnDefinitions: any[] = Object.values(columnDefination);

  
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  updateFilters(filters: any[]): void {debugger
    console.log('filters updates',filters);
    alert('yessss')
  }
}