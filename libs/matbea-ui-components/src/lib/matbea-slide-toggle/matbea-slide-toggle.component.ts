import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatSlideToggleChange} from "@angular/material/slide-toggle/slide-toggle";

@Component({
  selector: 'matbea-slide-toggle',
  templateUrl: './matbea-slide-toggle.component.html',
  styleUrls: ['./matbea-slide-toggle.component.scss']
})
export class MatbeaSlideToggleComponent implements OnInit {
  @Input() disabled: boolean;
  @Input() checked: boolean;
  @Input() disableRipple: boolean;
  @Input() id: string;
  @Input() labelPosition: 'before' | 'after'='before';
  @Input() name: string | null;
  @Input() required: boolean;
  @Output() change: EventEmitter<MatSlideToggleChange>= new EventEmitter<MatSlideToggleChange>();
  @Output() toggleChange: EventEmitter<void>;
  @Input() classLable: string;
  @Input() lable: string;


  constructor() {
  }

  ngOnInit(): void {
  }

  isChange($event: MatSlideToggleChange) {
    this.change.emit($event);
  }
}
