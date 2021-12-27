import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  TemplateRef,
  ElementRef,
  AfterViewInit,
  EventEmitter, Output
} from '@angular/core';
import { PipePipe } from '../../pipes/pipe.pipe';
import { ColumnDefinition } from '../../models/column-definition.model';


@Component({
  selector: 'matbea-table-cell',
  templateUrl: './matbea-table-cell.component.html',
  styleUrls: ['./matbea-table-cell.component.scss'],

})
export class MatbeaTableCellComponent implements OnInit, OnChanges{
  @Input() column: ColumnDefinition;
  @Input() item: any;
  @Input() style;

  formater;
  action;
  class: any;
  @Output()clickInMenu= new EventEmitter();


  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
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
