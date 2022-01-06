import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AmalotDataType, kodAmalaType, KODEY_AMALOT } from '../amalot/amalot.data';

export const KODEY_AMALOT_VIEW: kodAmalaType[] = [
  {kod:"1", name:"פטור"},
  {kod:"2", name:"שיעור הנחה"},
  {kod:"4", name:'סכום בש"ח'},
  {kod:"3", name:"תעריפון"}
];
@Component({
  selector: 'matbea-amalot-view',
  templateUrl: './amalot-view.component.html',
  styleUrls: ['./amalot-view.component.scss']
})
export class AmalotViewComponent implements OnInit {
  @Input() amalotInfoResp: AmalotDataType;
  kodeyAmtView = KODEY_AMALOT_VIEW;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes.amalotInfoResp){
      this.kodeyAmtView = KODEY_AMALOT_VIEW;
      switch (this.amalotInfoResp.kodAmala) {
        case ("2"):
          this.kodeyAmtView.find(x=>x.kod == "2").name = "שיעור הנחה" + " % " + this.amalotInfoResp.shiurHncaAmalatTipul;
        break;
        case ("4"):
          this.kodeyAmtView.find(x=>x.kod == "4").name = 'סכום בש"ח' + " " + this.amalotInfoResp.sachHakolAmalaNeto;
        break;  
      } 
    }
  }
}
