import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'matbea-divider',
  templateUrl: './matbea-divider.component.html',
  styleUrls: ['./matbea-divider.component.scss']
})
export class MatbeaDividerComponent implements OnInit {
@Input()  inset:boolean=false;
@Input() vertical:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
