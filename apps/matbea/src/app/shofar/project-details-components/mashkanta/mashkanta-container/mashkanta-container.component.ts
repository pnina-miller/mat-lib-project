import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'matbea-mashkanta-container',
  templateUrl: './mashkanta-container.component.html',
  styleUrls: ['./mashkanta-container.component.scss']
})
export class MashkantaContainerComponent implements OnInit {
  
  eventsSubject: Subject<void> = new Subject<void>();
  @Input() projectId:any;
  @Output() saveBtnPressed = new EventEmitter<"">();
  isEditMode = false;
  class = '';
  constructor() { }
  
  emitEventToChild() {
    this.eventsSubject.next();
  }

  ngOnInit(): void {
  }
  saveMashkanta(){
    this.saveBtnPressed.emit();
  }
  changeMode($event): void{
    if(!$event){
      this.class='over-matbea-slice-data';
    }else {
      this.class='';
    }
    if(this.isEditMode){
      this.emitEventToChild();
    }else{
      this.switchMode();
    }
  }
  okToSwitchMode($event: boolean){
    if($event){
      this.switchMode();
      this.class='';    }
  }

  switchMode() {
    this.isEditMode = !this.isEditMode;
  }

}
