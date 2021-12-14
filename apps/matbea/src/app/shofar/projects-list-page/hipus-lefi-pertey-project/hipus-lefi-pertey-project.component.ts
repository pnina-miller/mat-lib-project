import {Component, EventEmitter, OnInit, Output, ViewChild, Input} from '@angular/core';
import {State} from "../../store/state/shofar.state";
import {Store} from "@ngrx/store";
import * as ShofarActions from '../../store/actions/shofar.actions';
import { MatbeaSearchTypeComponent } from 'libs/matbea-shared-components/src/lib/matbea-search-type/matbea-search-type.component';

import { SortByValue, SortByType } from 'libs/matbea-shared-components/src/lib/matbea-search-type/matbea-search-type-gen-obj';


@Component({
  selector: 'matbea-hipus-lefi-pertey-project',
  templateUrl: './hipus-lefi-pertey-project.component.html',
  styleUrls: ['./hipus-lefi-pertey-project.component.scss']
})
export class HipusLefiPerteyProjectComponent implements OnInit {
  isFindWihtFinderObject= false
@Output() toDefault= new EventEmitter;
@Input() status;
searchType: SortByType[] = [
  {id:3, value:"מס' פרויקט"},
  {id:1, value:"פרטי חשבון"},
  {id:2, value:"קוד מוטב"}
];

sortByValues: SortByValue[] =[
  {id: 3, name:"מס' פרויקט", value: ""},
  {id: 2, name: "קוד מוטב", value: ""},
  {id: 1, name:"סניף", value: ""},
  {id: 1, name:"חשבון", value: ""}
];

@ViewChild(MatbeaSearchTypeComponent) form:MatbeaSearchTypeComponent
  private finderObj: { [p: string]: number | string }={};
  constructor( private store$: Store<State>) { }

  ngOnInit(): void {
  }
  toDefaultValue(){
    this.form.emptyInputs();
  
  }
  toFind($event) {
    this.isFindWihtFinderObject=false;
    this.toDefault.emit('perteyProect');
    this.finderObj={'status':this.status};
    this.finderObj['value'] = $event.value;
    this.finderObj['peilut'] = $event.peilut;
    this.isFindWihtFinderObject = true;
    if(this.isFindWihtFinderObject){
      this.store$.dispatch(ShofarActions.findProjectsByFilter({finderObject: this.finderObj}))
    }else{
      this.store$.dispatch(ShofarActions.initProjectList())
    }
  }
}
