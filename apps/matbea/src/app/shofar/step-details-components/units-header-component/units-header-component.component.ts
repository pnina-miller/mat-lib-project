import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'matbea-units-header-component',
  templateUrl: './units-header-component.component.html',
  styleUrls: ['./units-header-component.component.scss']
})
export class UnitsHeaderComponentComponent implements OnInit {

  @Input() step:any

  constructor() { }

  ngOnInit(): void {
  }


}
