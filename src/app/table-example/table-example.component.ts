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

  openDialog(event: any) {

    const target = new ElementRef(event.currentTarget);
    if (this.dialog.openDialogs.length > 0)
      this.dialog.closeAll()
    else {
      this.dialog.open(FilterPopupComponent, {
        backdropClass: 'backdropBackground',
        height: '400px',
        width: '300px',
        panelClass: 'md-dialog-container',
        data: {
          trigger: target,
          TableDataSourceUrl:this.tableDataSourceUrl,
          ColumnDefinitionsUrl: this.columnDefinitionsUrl
        }
      });
    }
  }

}