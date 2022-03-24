import { Component, Input, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'matbea-table-header-cell',
  templateUrl: './matbea-table-header-cell.component.html',
  styleUrls: ['./matbea-table-header-cell.component.scss']
})
export class MatbeaTableHeaderCellComponent implements OnInit {

@Input() column;

  constructor(public viewContainerRef:ViewContainerRef) { }

  ngOnInit(): void {
  }

}
