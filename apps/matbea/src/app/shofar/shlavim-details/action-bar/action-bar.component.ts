import { ChangeDetectorRef, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'matbea-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss']
})
export class ActionBarComponent implements OnChanges {

  @Input() arrayLength:number
  @Input()  selectedRows!: number[];
  @Output() selectedRowsChange = new EventEmitter<number[]>();
 
  rangeFrom:number=0;
  fromOptions=[];
  rangeTo:number=0;
  toOptions=[];
  constructor(private cdr: ChangeDetectorRef) { }

  ngOnChanges(): void {
    if(!this.fromOptions[0]){
    this.fromOptions=Array.from({length:this.arrayLength}).map((el,i)=>({ id: i, value: i }))
    this.toOptions=Array.from({length:this.arrayLength-this.rangeFrom}).map((el,i)=>({ id: i+this.rangeFrom, value: i+this.rangeFrom }))
  }
}

  fromChanged(rangeFrom,rangeTo): void {
    this.rangeFrom=rangeFrom;
    this.rangeTo=rangeTo;
    let length=rangeTo-this.rangeFrom
    this.selectedRowsChange.emit(Array.from({length}).map((el,i)=>i+this.rangeFrom));

  }

}
