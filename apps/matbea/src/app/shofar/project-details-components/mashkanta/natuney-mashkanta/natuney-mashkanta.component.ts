import { Component, OnInit, Input, ɵɵtrustConstantResourceUrl, NgZone, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../../services/shofar-services';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { GeneralComboEntry } from 'libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-general-combo/general-combo-interface';
import { FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MashkantaType, AmalotType, saveMskDataType } from './natuney-mashkanta-data';
import { Observable, Subscription, Subject } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'matbea-natuney-mashkanta',
  templateUrl: './natuney-mashkanta.component.html',
  styleUrls: ['./natuney-mashkanta.component.scss'],
})



export class NatuneyMashkantaComponent implements OnInit {
  @Input() projectId: any;
  @Input() events: Observable<void>;
  @Input() isEditMode = false;
  @Output() okToSwitchMode: EventEmitter<boolean> = new EventEmitter();
  
  getChildsChenges: Subject<void> = new Subject<void>();
  mashkantaInfoResp: MashkantaType;
  amalotInfResp: AmalotType;
  dargatMashkantaLst: GeneralComboEntry[];
  infoGenResp : GeneralResponse;
  isNatunimExt = false;
  message = "";
  private eventsSubscription: Subscription;

  constructor(private shofarServices : ShofarServices, public datepipe: DatePipe) {
  }

  ngOnInit(): void {

    this.getPirteyMsknt();
    this.eventsSubscription = this.events.subscribe(() => this.saveMashkantaPressed());
  }

  getPirteyMsknt() {
    this.shofarServices.getNatuneyMashkanta(this.projectId).subscribe(resp => {      
        this.infoGenResp = resp as GeneralResponse;
        if(this.infoGenResp.messages != undefined && this.infoGenResp.messages.global.errors.length > 0){
          this.isNatunimExt = false;
          this.message = this.infoGenResp.messages.global.errors[0].message;
        }else{
          this.isNatunimExt = true;
          this.message = "";
          this.mashkantaInfoResp = this.infoGenResp.data["natuneyMashkantaData"] as MashkantaType;
          this.amalotInfResp = this.infoGenResp.data["amalot"] as AmalotType;
          this.dargatMashkantaLst = this.infoGenResp.data["dargatMashkantaOptLst"];
        }
      },
      (error) => { 
        console.error('error caught in component' + error)
    });

  }

  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
  }

  saveMashkantaPressed(){
    this.getChildsChenges.next();
  }


  save($event: MashkantaType){
    this.mashkantaInfoResp = $event;
    let  saveData: saveMskDataType = {mashkanta: this.mashkantaInfoResp, amalot: this.amalotInfResp};
    this.shofarServices.setNatuneyMashkanta(saveData).subscribe(resp => {
      if(resp){
          this.getPirteyMsknt();
          this.okToSwitchMode.emit(true);
      }
    });    
  }
}
