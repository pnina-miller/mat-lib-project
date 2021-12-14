import { Component, OnInit, Input, NgZone, SimpleChanges } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MashkantaType, AmalotType } from '../natuney-mashkanta/natuney-mashkanta-data';
import { GeneralComboEntry } from '../../../../../../../../libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-general-combo/general-combo-interface';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../../services/shofar-services';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';


@Component({
  selector: 'matbea-natuney-mashkanta-view',
  templateUrl: './natuney-mashkanta-view.component.html',
  styleUrls: ['./natuney-mashkanta-view.component.scss']
})
export class NatuneyMashkantaViewComponent implements OnInit {

    @Input() projectId: any;
    
    @Input() mashkantaInfoResp: MashkantaType;
    @Input() amalotInfResp: AmalotType;
    @Input() dargatMashkantaLst: GeneralComboEntry[];
  
    selectedDarga: number;
    dateStr:string;
    mugbalLeSchum = "";   
    isNatunimExt = false;
    valueToSelectStatus: { id: number, value: string }[];
    message = "";
    isDataReady = false;
    private eventsSubscription: Subscription;
  
    constructor(private http: HttpClient, private shofarServices : ShofarServices, 
                public datepipe: DatePipe, private zone: NgZone,  private router: Router) {
    }
  
    ngOnInit(): void {
      this.getDate();
      this.getPirteyMsknt();
    }
    
    ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
      if(changes.mashkantaInfoResp && changes.dargatMashkantaLst){
        this.getDate();
        this.getPirteyMsknt();
        this.isDataReady = true;
      }
    }
  
    getPirteyMsknt() {
            this.isNatunimExt = true;
    }
    
    getFormatedDate(date: Date, format: string) {
      const datePipe = new DatePipe('en-US');
      return datePipe.transform(date, format);
    }
  
    getDate() {
      if(this.mashkantaInfoResp.tar8HchvLeRsmMsknt){
        this.dateStr = this.mashkantaInfoResp.tar8HchvLeRsmMsknt;
        let year:string = this.dateStr.substring(0, 4);
        let month:string = this.dateStr.substring(4, 6);
        let day:string = this.dateStr.substring(6);
        this.dateStr = (day + "/" + month + "/" + year);
      }
    } 
  }