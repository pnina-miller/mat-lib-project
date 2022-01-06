import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'matbea-amalot-container',
  templateUrl: './amalot-container.component.html',
  styleUrls: ['./amalot-container.component.scss']
})
export class AmalotContainerComponent implements OnInit {
  @Input() projectId:any;
  eventsSubject: Subject<void> = new Subject<void>();
  isEditMode = false;
  class='';

  constructor() { }
  
  emitEventToChild() {
    this.eventsSubject.next();
  }
  
  ngOnInit(): void {
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

  okToSwitchMode($event){
    if($event){
      this.switchMode();
      this.class='';

    }
  }
  switchMode() {
    this.isEditMode = !this.isEditMode;
  }
  
}
