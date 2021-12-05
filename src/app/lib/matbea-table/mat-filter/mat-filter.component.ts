import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableService } from '../../matbea-table/services/mat-table.service';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';

@Component({
  selector: 'matbea-mat-filter',
  templateUrl: './mat-filter.component.html',
  styleUrls: ['./mat-filter.component.scss']
})
export class MatFilterComponent implements OnInit {

  constructor(public dialog: MatDialog, private matTableService: MatTableService) { }

  @Input() tableDataSource!: any[];
  @Input() columnDefinitions!: any[]

  @Input() tableDataSourceUrl!: number;
  @Input() columnDefinitionsUrl!: number;

  @Output() updateFilters: EventEmitter<any[]>=new EventEmitter();

  ngOnInit(): void {
this.matTableService.displayDataSource.subscribe(data =>this.tableDataSource=data.data );
this.matTableService.displayedColumns.subscribe(colums=> this.columnDefinitions=colums);
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
          ColumnDefinitionsUrl: this.columnDefinitionsUrl,
          updateFilters:(filters:any[])=>{ this.updateFilters.emit(filters)}
        }
      });
    }
  }

}
