import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { AmalotDataType, kodAmalaType, KODEY_AMALOT } from '../amalot/amalot.data';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'matbea-amalot-edit',
  templateUrl: './amalot-edit.component.html',
  styleUrls: ['./amalot-edit.component.scss']
})
export class AmalotEditComponent implements OnInit {
  @Input() amalotInfoResp: AmalotDataType;
  @Input() savePressed: Observable<void>;
  @Output() save: EventEmitter<AmalotDataType> = new EventEmitter();
  
  eventsSubscription: Subscription;
  
  chosenKodAmla: kodAmalaType;
  kodeyAmalot = KODEY_AMALOT;
  isDataReady: boolean = false;
  isSeckAmltErr= false;
  isShiurHncaErr= false;
  isLoHeterErr = false;
  isDiraOclErr = false;
  isAmlImHeterErr = false;

  shiurHncaErrMsg = "יש להזין שיעור הנחה";
  sechAmltErrMsg = "יש להזין סכום";
  amlotInpErrMsg="חסר ערך בשדה חובה";


  constructor() { }

  ngOnInit(): void {
    this.eventsSubscription = this.savePressed.subscribe(() => this.saveChanges());

  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if(changes.amalotInfoResp){
      this.isDataReady = true;
    }
  }
  onChangeRadio($event){
    console.log($event);
    this.amalotInfoResp.kodAmala = $event.value;    
  }
  inputHncaAmltChanged(){
    this.isShiurHncaErr = false;
  }
  inputSachAmltChanged(){
    this.isSeckAmltErr = false;
  }
  inputAmlArvSna(){
    this.isAmlImHeterErr = false;
  }
  inputDiraOcl(){
    this.isDiraOclErr = false;
  }
  inputLeLoHeter(){
    this.isLoHeterErr = false;
  }

  saveChanges() {
    if(this.inputCheck()){
      this.save.emit(this.amalotInfoResp);
    }
    else{
      this.showErrMsg();
    }
  }
  showErrMsg() {
    this.isSeckAmltErr = this.isSachHakolAmalaEmpty();
    this.isShiurHncaErr = this.isShiurHncaEmpty();
    this.isAmlImHeterErr = this.isAmlImHeterEmpty();
    this.isDiraOclErr = this.isDiraOclEmpty();
    this.isLoHeterErr = this.isLoHeterEmpty();
  }

  inputCheck() {
    return(this.isSachHakolAmalaEmpty() || 
           this.isShiurHncaEmpty()      ||
           this.isLoHeterEmpty()        ||
           this.isDiraOclEmpty()        ||
           this.isAmlImHeterEmpty())     ? false : true;
  }
  isShiurHncaEmpty(): boolean{
    return (this.amalotInfoResp.kodAmala=='2' && (!this.amalotInfoResp.shiurHncaAmalatTipul || this.amalotInfoResp.shiurHncaAmalatTipul == '0'));
  }
  isSachHakolAmalaEmpty(): boolean{
    return (this.amalotInfoResp.kodAmala=='4' && (!this.amalotInfoResp.sachHakolAmalaNeto || this.amalotInfoResp.sachHakolAmalaNeto == '0'));
  }

  isAmlImHeterEmpty(){
    return(!this.amalotInfoResp.shiurAmlatArvutSna || this.amalotInfoResp.shiurAmlatArvutSna == '0');
  }
  isDiraOclEmpty(){
    return(!this.amalotInfoResp.shiurAmlArvDiraOcls || this.amalotInfoResp.shiurAmlArvDiraOcls == '0');
  }
  isLoHeterEmpty(){
    return(!this.amalotInfoResp.shiurAmlArvLloHeter || this.amalotInfoResp.shiurAmlArvLloHeter == '0');
  }


}
