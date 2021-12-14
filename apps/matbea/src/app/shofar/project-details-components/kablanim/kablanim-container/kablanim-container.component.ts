import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'matbea-kablanim-container',
  templateUrl: './kablanim-container.component.html',
  styleUrls: ['./kablanim-container.component.scss']
})
export class KablanimContainerComponent implements OnInit {
  @Input() projectId:any;

  constructor() { }

  ngOnInit(): void {
  }

}
