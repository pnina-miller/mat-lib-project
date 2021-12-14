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
  constructor() { }
  
  emitEventToChild() {
    this.eventsSubject.next();
  }

  ngOnInit(): void {
  }
  saveMashkanta(){
    this.saveBtnPressed.emit();
  }
  changeMode(): void{
    if(this.isEditMode){
      this.emitEventToChild();
    }
    this.isEditMode = !this.isEditMode;
  }

}
