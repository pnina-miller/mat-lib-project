import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ShofarServices } from '../../../services/shofar-services';
import { HttpClient } from '@angular/common/http';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { Observable, Subject, Subscription } from 'rxjs';
import { AmalotDataType, kodAmalaType } from './amalot.data';

@Component({
  selector: 'matbea-amalot',
  templateUrl: './amalot.component.html',
  styleUrls: ['./amalot.component.scss']
})
export class AmalotComponent implements OnInit {
  @Input() projectId:any;
  @Input() isEditMode;
  @Input() savePrsdEvent: Observable<void>;
  @Output() okToSwitchMode: EventEmitter<boolean> = new EventEmitter();
  
  private savePrsdEventSubscription: Subscription;


  infoGenResp: GeneralResponse;
  isNatunimExt = false;
  message: string;
  amalotInfoResp: AmalotDataType;
  chosenKodAmla: kodAmalaType;
  kodeyAmalot: kodAmalaType[] = [
    {kod:"0", name:"פטור"},
    {kod:"1", name:'סכום בש"ח'},
    {kod:"2", name:"שיעור הנחה"},
    {kod:"3", name:"תעריפון"}
  ];
  getChildsChenges: Subject<void> = new Subject<void>();


  constructor(private shofarServices : ShofarServices) { }

  ngOnInit(): void {
    this.getPirteyAmalot();
    this.savePrsdEventSubscription = this.savePrsdEvent.subscribe(() => this.saveAmalotPressed());
  }

  getPirteyAmalot() {
    this.shofarServices.getNatuneyAmalot(this.projectId).subscribe(resp => {      

      this.infoGenResp = resp as GeneralResponse;
      if(this.infoGenResp.messages != undefined && this.infoGenResp.messages.global.errors.length > 0){
        this.isNatunimExt = false;
        this.message = this.infoGenResp.messages.global.errors[0].message;
      }else{
        this.isNatunimExt = true;
        this.message = "";
        this.amalotInfoResp = this.infoGenResp.data["amalot"] as AmalotDataType;
      }
    },
    (error) => { 
      console.error('error caught in component' + error)
    })
  }
  
  saveAmalotPressed(){
    this.getChildsChenges.next();
  }

  save($event: AmalotDataType){
    this.amalotInfoResp = $event;
    if(this.amalotInfoResp != null){
      this.shofarServices.saveAmalot(this.amalotInfoResp).subscribe(resp => {
        if(resp){
          this.getPirteyAmalot();
          this.okToSwitchMode.emit(true);
        }
      });    
    }
  }
}
