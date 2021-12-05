import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MatRadioChange} from "@angular/material/radio";

@Component({
  selector: 'matbea-radio-button',
  templateUrl: './matbea-radio-button.component.html',
  styleUrls: ['./matbea-radio-button.component.scss']
})
export class MatbeaRadioButtonComponent implements OnInit, OnChanges {
 @Input() options!: {id: number, value: string, required?:boolean, name:string, disabled?:boolean, checked: boolean, class?: string}[];
  @Input() labelPosition!: 'before' | 'after';
  @Input() tabIndex!: number;
  @Input() groupDisable!: boolean;
  @Input() groupLabelPosition!: 'before' | 'after';
  @Input() groupName!: string;
  @Input() groupRequired!: boolean;
  @Input() groupId!: string;
  @Input() groupTabIndex!: number;
  @Input() groupValue!: string;
  @Input() checked!: number;
  @Input() class: any;
  @Input() groupClass: any;
  @Output() checkedChange= new EventEmitter();
  @Output() groupChange= new EventEmitter();
  selected: any;

  constructor() { }

  ngOnInit(): void {
    this.selected= this.getOption(this.checked);
  }

  getValueChange($event: MatRadioChange) {
console.log('valueChange', $event)
this.checkedChange.emit(this.getOption($event.source.id));

  }

  getGroupChange($event: MatRadioChange) {
    console.log('groupChange', $event)
    this.groupChange.emit(this.getOption($event.source.id))
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
   private  getOption(checked:any):any{
    let temp;
    this.options.forEach(x=>{
      if(x.id == checked ){
        temp = x;
      }
    })
    return temp;
  }
}
