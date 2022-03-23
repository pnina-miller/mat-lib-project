import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'matbea-table-cell-try',
  templateUrl: './table-cell-try.component.html',
  styleUrls: ['./table-cell-try.component.scss']
})
export class TableCellTryComponent implements OnInit {

  item;
  column;
  index;
  clickInMenu;
  onRowSelected;
  constructor() { }

  ngOnInit(): void {
    console.log(this);
    
  }

}
