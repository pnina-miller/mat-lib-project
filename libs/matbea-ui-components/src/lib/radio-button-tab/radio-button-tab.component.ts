import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'matbea-radio-button-tab',
  templateUrl: './radio-button-tab.component.html',
  styleUrls: ['./radio-button-tab.component.scss']
})
export class RadioButtonTabComponent implements OnInit {
  @Input('dataList') buttonsArray!: RadioButtonTabEntry[]; 
  @Input('value') selectedButton!: string;
  @Output() selectedButtonChanged = new EventEmitter<String>();


  constructor() { }

  ngOnInit(): void {
  }


  selectionChaned(selectedButton:any){
    this.selectedButton = selectedButton; 
    this.selectedButtonChanged.emit(selectedButton);
  }

}


export interface RadioButtonTabEntry{
  id: string;
  description: string;
}

