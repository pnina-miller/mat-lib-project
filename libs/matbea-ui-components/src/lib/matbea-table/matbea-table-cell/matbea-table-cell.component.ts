import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter, Output
} from '@angular/core';
import { ColumnDefinition } from '../../models/column-definition.model';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'matbea-table-cell',
  templateUrl: './matbea-table-cell.component.html',
  styleUrls: ['./matbea-table-cell.component.scss'],

})
export class MatbeaTableCellComponent implements OnInit, OnChanges{
  @Input() column: ColumnDefinition;
  @Input() item: any;
  @Input() index: number;
  @Input() style;

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
    this.inputControl.valueChanges.subscribe((value: any) => { this.column.action({value:value, target:this.index, key: this.column.columnnameenglish})})
    this.selectControl.valueChanges.subscribe((value:any) => {if(value!==this.item.selectRow){this.onRowSelected.emit({target:this.item.selectIndex || this.index, value})}})
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.column.columnformatter==='checkbox'){
      this.selectControl.setValue(this.item[this.column.columnnameenglish]);
    }
    if(this.column.columnformatter==='input'){
      this.inputControl.setValue(this.item[this.column.columnnameenglish]);
    }
if(this.item[this.column.columnnameenglish]=='פעיל'){
  this.class='matbea-table-cell-status-pail';
}
else if(this.item[this.column.columnnameenglish]=='הסתיים'){
  this.class='matbea-table-cell-status-histaem';
}

  }
  getTemplate(column) {
    return this.column.columnformatter;
  }
}
