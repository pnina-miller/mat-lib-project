import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {MatSelectChange} from "@angular/material/select";
import {MatFormField} from '@angular/material/form-field';

@Component({
  selector: 'matbea-combo',
  templateUrl: './matbea-combo.component.html',
  styleUrls: ['./matbea-combo.component.scss']
})
export class MatbeaComboComponent implements OnInit, OnChanges {
  @Input() lable = 'true';
  @Input('options') options!: { id: number, value: string, disable?: boolean, style?: string }[];
  @Input() hint!: string;
  @Input() disable = false;
  @Input() placeholder: any;
  @Input() valueToDefoult: any;
  @Input() panelClassSelect: string[] = ['panelClassSelect'];
  @Input() id: any;
  @Input() transparent: boolean = false;
  @Output('value') getValue = new EventEmitter();
  @Output('open') open = new EventEmitter();
  class: any;
  @Input() prefix: any;
  @Input() suffix: any;
  @Input() iconButtomPrefixName!: string;
  @Input() iconButtomPrefixDisabled!: boolean;
  @Input() iconButtomPrefixTooltip!: string;
  @Output('prefixClick') iconButtomPrefix: any;
  lableClass: any;
  @Input() lablePosition: 'start'| 'end'| 'top'='start';

  constructor() {
  }


  ngOnInit(): void {
    console.log("thisInMatbeaCombo", this);

  }

  openChange($event: boolean) {
    console.log("openCange", $event)
    this.open.emit($event);
  }

  selectionChange($event: MatSelectChange) {
    console.log("selectionChange", $event.value);
    this.options.forEach(x => {
      if (x.id == $event.value) {
        this.getValue.emit(x);
      }
    })

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
    if (this.transparent) {
      this.class = 'mat-form-field-transparent';
    }
    if(this.options){
      this.options.forEach(x => {
        if (x.id == this.valueToDefoult) {
          this.getValue.emit(x);
        }})
    }
    if(this.lablePosition== 'top'){
      this.lableClass='matbea-input-top'
    }
    if(this.lablePosition=='end'){
      this.lableClass='matbea-input-end'
    }

    console.log("this.getValue.emit ",this.valueToDefoult);
  }
}
