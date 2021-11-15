import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';

@Component({
  selector: 'app-mat-filter',
  templateUrl: './mat-filter.component.html',
  styleUrls: ['./mat-filter.component.scss']
})
export class MatFilterComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  @Input() tableDataSource!: any[];
  @Input() columnDefinitions!: any[]

  @Input() tableDataSourceUrl!: string;
  @Input() columnDefinitionsUrl!: string;

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
