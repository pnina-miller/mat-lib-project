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

  constructor() { }
  
  emitEventToChild() {
    this.eventsSubject.next();
  }
  
  ngOnInit(): void {
  }
  changeMode(): void{
    if(this.isEditMode){
      this.emitEventToChild();
    }
    this.isEditMode = !this.isEditMode;
  }

}
