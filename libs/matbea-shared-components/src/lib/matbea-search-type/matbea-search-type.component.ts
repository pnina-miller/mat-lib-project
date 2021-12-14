import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SortByType, SortByValue, FinderObj } from './matbea-search-type-gen-obj';

@Component({
  selector: 'matbea-matbea-search-type',
  templateUrl: './matbea-search-type.component.html',
  styleUrls: ['./matbea-search-type.component.scss']
})
export class MatbeaSearchTypeComponent implements OnInit {

  @Input() dataSource: SortByType[];
  @Output() selectedValue: SortByType;
  @Input() sortByValues: SortByValue[];
  findBy: FinderObj;
  @Output() toFind= new EventEmitter<FinderObj>();
  isLegalSrchInp = true;
  missingValArr: string[] = [];
  message = "";
  name: string;

  onChange($event) {
    console.log("selectedValue",$event)
    this.selectedValue = $event;
  }

  emptyInputs() {
    this.sortByValues.forEach(element => {
      element.value = "";
    });
  }

  constructor() { }

  ngOnInit(): void {
    this.selectedValue = this.dataSource[0];

  }

  onChangeInInput($event: Event) {
    console.log("CHANGE!",$event)
    this.empMissVall();
    const searchValue = this.getFindByValue();
    this.findBy = {value: searchValue, peilut: (searchValue=="")? 0 :this.selectedValue.id};
    if(this.isLegalSrchInp){
      this.toFind.emit( this.findBy);
    }
  }
  empMissVall() {
    this.missingValArr = [];
    this.message = "";
  }

  getFindByValue() {
    let valuesToSearch = this.sortByValues.filter((obj) => obj.id === this.selectedValue.id);
    let strVal = "";
    valuesToSearch.forEach(element => {
      if(element.value == ""){
        this.missingValArr.push(element.name);
      }
      strVal = (strVal != "")? strVal + '-' + element.value : strVal + element.value;
    });
    if(this.isSomeInputesEmpty(valuesToSearch)){
      this.isLegalSrchInp = false;
      this.generateMsg();
    }else{
      this.isLegalSrchInp = true;
    }
    return strVal;
  }
  generateMsg() {
    this.message = (this.missingValArr.length > 0)? "חובה להזין " + this.missingValArr.join(", ") : "";
  }

  inputChanged(value: SortByValue){
    this.name = value.name;
    if(this.missingValArr.length > 0 ){
      let i = this.missingValArr.findIndex(this.isSameField, value.name);
      this.missingValArr.splice(i,1);
      this.generateMsg();
    }

  }

  isSameField(element) {
    return element == this;
  }
  logValue($event){
    console.log($event.value);
  }

  isSomeInputesEmpty(valuesToSearch: SortByValue[]): boolean {
    return (this.missingValArr.length != 0)? true : false;
  }
}
