import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter, Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { TableField } from 'dynamic-mat-table';


@Component({
  selector: 'matbea-table-cell',
  templateUrl: './matbea-table-cell.component.html',
  styleUrls: ['./matbea-table-cell.component.scss'],

})
export class MatbeaTableCellComponent implements OnInit, OnChanges{
  @Input() column: TableField<any>;
  @Input() row: any;
  @Input() index: number;
  @Input() style;
  @Input() columnType='';
  formater;
  action;
  class: any;
  @Output()clickInMenu= new EventEmitter();
  @Output()onRowSelected= new EventEmitter();

  selectControl:FormControl = new FormControl(true);
  inputControl:FormControl = new FormControl();
  value=true;
  constructor() {

  }

  ngOnInit(): void {
    // this.inputControl.valueChanges.subscribe((value: any) => { this.column.action({value:value, target:this.index, key: this.column.name})})
    this.selectControl.valueChanges.subscribe((value:any) => {if(value!==this.row.selectRow){this.onRowSelected.emit({target:this.row.selectIndex || this.index, value})}})
  }

  ngOnChanges(changes: SimpleChanges): void {
    // if(this.column.type==='checkbox'){
    //   this.selectControl.setValue(this.row[this.column.name]);
    // }
    // if(this.column.type==='input'){
    //   this.inputControl.setValue(this.row[this.column.name]);
    // }
if(this.row[this.column.name]=='פעיל'){
  this.class='matbea-table-cell-status-pail';
}
else if(this.row[this.column.name]=='הסתיים'){
  this.class='matbea-table-cell-status-histaem';
}

  }
  getTemplate(column) {
    return this.column.type;
  }
}
