import {Component, EventEmitter, Input, OnInit, Output, ElementRef} from '@angular/core';
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'matbea-checkbox',
  templateUrl: './matbea-checkbox.component.html',
  styleUrls: ['./matbea-checkbox.component.scss']
})
export class MatbeaCheckboxComponent implements OnInit {
  @Input() id: string;
  @Input() disabled: boolean;
  @Input() labelPosition: 'before' | 'after';
  @Input() indeterminate: boolean;
  @Input() checked: boolean;
  @Input() required: boolean;
  @Input() tabIndex: any;
  @Input() value: boolean;
  @Input() name: string;
  @Input() lable: string;
  @Output() valueChange = new EventEmitter();
  @Output() indeterminateChange =new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  change($event: MatCheckboxChange) {
    console.log('change :', $event)
    this.valueChange.emit($event.checked);
  }

  getIndeterminateChange($event: boolean) {
    console.log('indeterminateChange :', $event)
    this.indeterminateChange.emit($event);
  }
}
