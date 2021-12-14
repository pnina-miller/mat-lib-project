import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {OuterSubscriber} from 'rxjs/internal/OuterSubscriber';
import {MatSelectChange} from "@angular/material/select";
const leLoBhira='ללא בחירה'
@Component({
  selector: 'matbea-form-field',
  templateUrl: './matbea-form-field.component.html',
  styleUrls: ['./matbea-form-field.component.scss']
})
export class MatbeaFormFieldComponent implements OnInit, OnChanges {
  @Output() valueOut = new EventEmitter<string | number>();
  @Input() type: 'select' | 'input' | 'textarea' = 'input';
  @Input() value: any|[{id:number, value:string}];
  @Input() placeholder!: string;
  @Input() isDisable: boolean = false;
  @Input() hint!: string;
  @Input() error: boolean = false;
  @Input() errorValue!: string;
  @Input() label!: string;
  @Input() defaultInSelector!: number;
  @Input() prefix!: string;
  // @Input() doNotChose: boolean = false;
  // dataSourse = this.doNotChose ? [{id:-1, value:leLoBhira}]:[];



  constructor() {
  }

  ngOnInit(): void {
    // this.dataSourse = this.doNotChose ? [{id:-1, value:leLoBhira}]:[]
  }

  getValue($event: any) {
    console.log("$event in form-field", $event)
    if (this.type == 'select') {
      this.valueOut.emit($event.value)
    } else {
      this.valueOut.emit(this.value);
    }

  }

  ngOnChanges(changes: SimpleChanges): void {
    // if (this.type == 'select') {
    //   this.dataSourse =this.value.concat(this.dataSourse);
    //}
    // this.defautInSelector;
    // this.value
    console.log("this.selected",this.defaultInSelector);
  }
}
