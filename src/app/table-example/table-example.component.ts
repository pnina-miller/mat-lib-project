import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, ViewChild, OnInit, Input, Inject, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FilterPopupComponent } from '../lib/filter-popup/filter-popup.component';
import { IfilterValues } from '../table.inteface';
import * as columnDefination from '../../assets/data/tableColumns.json'


@Component({
  selector: 'app-table-example',
  templateUrl: './table-example.component.html',
  styleUrls: ['./table-example.component.scss']
})
export class tableExampleComponent implements OnInit {


  @ViewChild(MatSort) sort: MatSort = new MatSort;


  @Input() elementData: any;
  @Input() columns!: IfilterValues;


  dataSource!: MatTableDataSource<any>;
  displayedColumns!: string[];

  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog) { }

  ngOnInit(): void {
    let data = Object.values(columnDefination)
    let dataSourch=Array.from(Array(10).keys()).map(i => {
      let obj: { [key: string]: string } = {id:i.toString()};
      let index=0;
      data.forEach(col =>{
        index++;
        if(index<15)
        col.columnnamehebrew ? obj[col.columnnamehebrew] = (Math.random() + 1).toString(36).substring(7) : {}
      })
      return obj;
    }
    )
    this.dataSource = new MatTableDataSource(dataSourch);

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
          dataSource: this.dataSource,
          columns: this.columns
        }
      });
    }
  }

}
