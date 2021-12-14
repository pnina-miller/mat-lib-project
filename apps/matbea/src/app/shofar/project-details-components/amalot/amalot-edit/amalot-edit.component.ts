import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AmalotDataType, kodAmalaType, KODEY_AMALOT } from '../amalot/amalot.data';

@Component({
  selector: 'matbea-amalot-edit',
  templateUrl: './amalot-edit.component.html',
  styleUrls: ['./amalot-edit.component.scss']
})
export class AmalotEditComponent implements OnInit {
  @Input() amalotInfoResp: AmalotDataType;
  chosenKodAmla: kodAmalaType;

  kodeyAmalot = KODEY_AMALOT;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes.amalotInfoResp){
      
    }
  }
  onChangeRadio($event){
    console.log($event);

  }

}
