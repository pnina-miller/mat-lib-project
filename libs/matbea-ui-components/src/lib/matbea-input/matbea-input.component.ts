import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'matbea-input',
  templateUrl: './matbea-input.component.html',
  styleUrls: ['./matbea-input.component.scss']
})
export class MatbeaInputComponent implements OnInit, OnChanges {

  limitNumber!: number;
  @Input() lable!: string;
  ngclass: string = '';
  @Input() placeholder!: string;
  @Input() value!: string | number;
  @Input() limit: number = 70;
  @Input() type!: string;
  @Output() click = new EventEmitter();
  @Input() disabled: boolean =false;
  @Input() prefix!: string;
  @Input() suffix!: string;
  @Input() iconButtomPrefixName!: string;
  @Input() iconButtomPrefixDisabled!: boolean;
  @Input() iconButtomPrefixTooltip!: string;
  @Input() hint!: string;
  @Output() valueChange = new EventEmitter();
  @Output() keypress = new EventEmitter()
  @Input() id!: string;
  lableClass: any;
  @Input() lablePosition: 'start' | 'end' | 'top' = 'start';
  @Input() autocomplete!: any[];
  @Input() transparent: boolean = true;
  @Input('disabledTransparent') disabledTransparent: boolean = false;
  @Input() class: string = '';
  classs: any;
  @Input() inputFormControl!: FormControl;
  @Input('error-messages') errorMessage!: { [k: string]: string };



  constructor() {
  }

  ngOnInit(): void {

  }

  getValueChange($event: any) {
    console.log("getValueChange", this.value);
    this.valueChange.emit(this.value);
    if (this.limit) {
      this.value = this.value.toString().slice(0, this.limit - 1);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.inputFormControl=this.inputFormControl?this.inputFormControl: new FormControl();
    this.inputFormControl.setValue(this.inputFormControl.value)
    console.log("changes: ", changes);
    this.limitNumber = (10 ^ this.limit);
    if (changes.value) {
      this.valueChange.emit(this.value);
    }
    if (this.lablePosition == 'top') {
      this.lableClass = 'matbea-input-top'
    }
    if (this.lablePosition == 'end') {
      this.lableClass = 'matbea-input-end'
    }
    if (this.transparent) {
      this.ngclass = 'matbea-form-field-transparent';
    }

    if(this.disabled){
      this.inputFormControl.disable();
      this.classs ='mat-form-field-disabled'
      if (this.disabledTransparent) {
        console.log(this.classs);
        this.classs = this.classs+' matbea-form-field-disabled-transparent'
      }
    }else {
      this.inputFormControl.enable();
      this.classs ='ng-valid';
      if (this.disabledTransparent) {
        console.log(this.classs);
        this.classs = this.classs+' matbea-form-field-disabled-transparent'
      }
    }

  }

  getErrorMessage() {debugger
    if(this.inputFormControl){
      let keys = Object.keys(this.inputFormControl.errors || {});
      let message = ''
      if (this.errorMessage) {
        keys.forEach((k) => {
          message = `${message}${this.errorMessage[k]} \n ${message}`;
        })
      }
      return message ? message : 'error';
    }
return;
  }
}
