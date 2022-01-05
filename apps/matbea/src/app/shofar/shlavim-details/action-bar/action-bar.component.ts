import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'matbea-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  @Input()  selectedRows!: number[];
  @Output() selectedRowsChange = new EventEmitter<number[]>();
  
  constructor() { }

  ngOnInit(): void {
  }

}
