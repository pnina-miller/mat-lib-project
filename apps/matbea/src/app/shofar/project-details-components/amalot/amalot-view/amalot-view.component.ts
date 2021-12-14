import { Component, OnInit, Input } from '@angular/core';
import { AmalotDataType, KODEY_AMALOT } from '../amalot/amalot.data';

@Component({
  selector: 'matbea-amalot-view',
  templateUrl: './amalot-view.component.html',
  styleUrls: ['./amalot-view.component.scss']
})
export class AmalotViewComponent implements OnInit {
  @Input() amalotInfoResp: AmalotDataType;
  kodeyAmalot = KODEY_AMALOT;
  constructor() { }

  ngOnInit(): void {
  }

}
