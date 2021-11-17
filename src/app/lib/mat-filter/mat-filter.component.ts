import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableService } from '../services/mat-table.service';
import { FilterPopupComponent } from './filter-popup/filter-popup.component';

@Component({
  selector: 'app-mat-filter',
  templateUrl: './mat-filter.component.html',
  styleUrls: ['./mat-filter.component.scss']
})
export class MatFilterComponent implements OnInit {

  constructor(public dialog: MatDialog, private matTableService: MatTableService) { }

  @Input() tableDataSource!: any[];
  @Input() columnDefinitions!: any[]

  @Input() tableDataSourceUrl!: string;
  @Input() columnDefinitionsUrl!: string;

  @Output() updateFilters: EventEmitter<any[]>=new EventEmitter();

  ngOnInit(): void {
    this.matTableService.init(this.tableDataSourceUrl,this.columnDefinitionsUrl, this.tableDataSource, this.columnDefinitions); 

  }


  openDialog(event: any) {
this.updateFilters.emit(['try'])
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
