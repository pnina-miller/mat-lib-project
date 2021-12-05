import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'matbea-shmor-shinui-button',
  templateUrl: './matbea-shmor-shinui-button.component.html',
  styleUrls: ['./matbea-shmor-shinui-button.component.scss']
})
export class MatbeaShmorShinuiButtonComponent implements OnInit {
  shmor: boolean=true;
@Output() shinui:EventEmitter<boolean>=new EventEmitter<boolean>();
@Input() disabled: boolean= false;
@Input() shkifut: boolean= false;
@Input() hold: boolean= false;
  constructor() { }

  ngOnInit(): void {
  }

  click() {
   if(!this.hold) (this.shmor=!this.shmor);
    this.shinui.emit(this.shmor);
  }
}
