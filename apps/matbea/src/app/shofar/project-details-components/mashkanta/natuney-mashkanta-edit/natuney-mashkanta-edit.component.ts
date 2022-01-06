import { Component, OnInit, Input, NgZone, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MashkantaType, AmalotType, saveMskDataType } from '../natuney-mashkanta/natuney-mashkanta-data';
import { GeneralComboEntry } from '../../../../../../../../libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-general-combo/general-combo-interface';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../../services/shofar-services';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'matbea-natuney-mashkanta-edit',
  templateUrl: './natuney-mashkanta-edit.component.html',
  styleUrls: ['./natuney-mashkanta-edit.component.scss']
})
export class NatuneyMashkantaEditComponent implements OnInit {
  @Input() projectId: any;
  @Input() mashkantaInfoResp: MashkantaType;
  @Input() amalotInfResp: AmalotType;
  @Input() dargatMashkantaLst: GeneralComboEntry[];
  @Input() savePressed: Observable<void>;

  @Output() save: EventEmitter<MashkantaType> = new EventEmitter();
  private eventsSubscription: Subscription;
  isMelelErr = false;
  isSchumErr = false;
  melelErrMsg = "יש להזין הסבר לדרגת משכנתא";
  schumErrMsg = "יש להזין סכום התחייבות";

  mashkantaDateFilter  = (selectedDate: Date | null): boolean => {
    const today = new Date();    
    return selectedDate <= today;
  }
  valueToSelectStatus: { id: number, value: string }[];

  selectedDarga;
  date = new FormControl(new Date());
  dateStr:string;
  mugbalLeSchum = "";   
  message = "";
  isDataReady = false;

  constructor(private http: HttpClient, private shofarServices : ShofarServices, 
              public datepipe: DatePipe, private zone: NgZone,  private router: Router) {
  }

  ngOnInit(): void {
    this.eventsSubscription = this.savePressed.subscribe(() => this.saveChanges());
  }
      
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes.mashkantaInfoResp && changes.dargatMashkantaLst){
      let year = Number(this.mashkantaInfoResp.tar8HchvLeRsmMsknt.substring(0, 4));
      let month = (Number(this.mashkantaInfoResp.tar8HchvLeRsmMsknt.substring(4, 6)))-1;
      let day = Number(this.mashkantaInfoResp.tar8HchvLeRsmMsknt.substring(6, 8));
      this.mashkantaInfoResp.tar8HchvLeRsmMskntDt = new Date(year, month, day);
      this.getComboDarga();
      this.isDataReady = true;
    }
  }


  getComboDarga() {
    if(this.dargatMashkantaLst.length > 0){
      this.valueToSelectStatus = this.dargatMashkantaLst.map((v) => {
        if(v.value==this.mashkantaInfoResp.kodDargatMashkanta){
          this.selectedDarga=+v.value;
        }
        return {id: +v.value , value: v.shortDesc}
      });
    }
  }
  
  getFormatedDate(date: Date, format: string) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, format);
  }


  hagbalaChecked(select: boolean){
    this.mashkantaInfoResp.metegHagbala = (select)? 1 : 0;
  }

  dargaChange($event) {
    console.log("selectedValue",$event)
    this.mashkantaInfoResp.kodDargatMashkanta = $event.id;
    this.mashkantaInfoResp.teurDargatMsknt = $event.value;
  }

  dateChange(){
    let year: string = "" + this.mashkantaInfoResp.tar8HchvLeRsmMskntDt.getFullYear();
    let month: string = "" + (this.mashkantaInfoResp.tar8HchvLeRsmMskntDt.getMonth() +1);
    if(month.length == 1){
      month = "0" + month;
    }
    let day: string = "" + (this.mashkantaInfoResp.tar8HchvLeRsmMskntDt.getUTCDate() + 1);
    if(day.length == 1){
      day = "0" + day;
    }
    this.mashkantaInfoResp.tar8HchvLeRsmMsknt = year + month + day;
  }

  inputCheck() {
    let isFullInput = true;
    if( this.isSchumHaser() || this.isMelelHaser()) {
      isFullInput = false;
    }
    return isFullInput;
  }
  
  saveChanges() {
    if(this.inputCheck()){
      this.save.emit(this.mashkantaInfoResp);
    }
    else{
      this.showErrMsg();
    }
  }
  showErrMsg() {
    this.isMelelErr = this.isMelelHaser();
    this.isSchumErr = this.isSchumHaser();
  }

  isMelelHaser(){
    return (this.mashkantaInfoResp.teurDargatMsknt != 'ראשונה' && 
            (this.mashkantaInfoResp.melelDargatMashkanta == "" || 
            this.mashkantaInfoResp.melelDargatMashkanta == null))? 
            true : false;
  }
  isSchumHaser(){
    return (this.mashkantaInfoResp.metegHagbala == 0 && this.mashkantaInfoResp.schumHitchayvutMsknt == 0)?
            true : false;
  }
  inputChanged(field: String){
    switch (field) {
      case 'schum':
        this.isSchumErr = false;
        break;
      case 'melelDarga':
        this.isMelelErr = false;
        break;
    }
  }
}
