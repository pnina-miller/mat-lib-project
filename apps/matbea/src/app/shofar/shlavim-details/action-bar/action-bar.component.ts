import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'matbea-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnInit {

  @Input()  selectedRows!: number[];
  @Output() selectedRowsChange = new EventEmitter<number[]>();
 
  rangeFrom:number=0
  rangeTo:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
