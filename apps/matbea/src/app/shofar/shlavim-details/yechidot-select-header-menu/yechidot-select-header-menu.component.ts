import { Component, EventEmitter, OnInit, ViewContainerRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatbeaTableComponent } from 'libs/matbea-ui-components/src/lib/matbea-table/matbea-table.component';

@Component({
  selector: 'matbea-yechidot-select-header-menu',
  templateUrl: './yechidot-select-header-menu.component.html',
  styleUrls: ['./yechidot-select-header-menu.component.scss']
})
export class YechidotSelectHeaderMenuComponent implements OnInit {
  
  selectControl: FormControl = new FormControl();
  dataSource;
  selectedRows=[];
  selectedRowsChange = new EventEmitter();
  onRowSelected;
  tableData:MatbeaTableComponent;
  constructor(public viewContainerRef:ViewContainerRef) { }

  ngOnInit(): void {
    this.selectControl=this.tableData.selectControl;
    this.dataSource=this.tableData.dataSource;
    this.selectedRows==this.tableData.selectedRows;
    this.onRowSelected=this.tableData.onRowSelected;
    this.selectedRowsChange=this.tableData.selectedRowsChange;
    this.selectControl.valueChanges.subscribe((value: boolean) => { Array.from({ length: this.dataSource?.filteredData.length }).forEach((el, i) => { this.onRowSelected({ target: i, value }) }) })
    
  }

  selectMethod(event: any) {
    if(event.id===1){
      this.onRowSelected({target:-1,value:true})
    } else{
    Array.from({ length: this.dataSource.filteredData.length }).forEach((el, i) => this.onRowSelected({ target: i, value: true }))
    }
  }
}
