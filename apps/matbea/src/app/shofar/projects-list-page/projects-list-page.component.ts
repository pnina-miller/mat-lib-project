import {Component, OnInit, ViewChild, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import {State} from "../store/state/shofar.state";
import * as ShofarActions from '../store/actions/shofar.actions';
import * as ShofarSelects from '../store/selectors/shofar.selectors';
import {Subscription} from "rxjs";

import { HipusLefiPerteyProjectComponent } from './hipus-lefi-pertey-project/hipus-lefi-pertey-project.component';
import { ComboStatusProjectComponent } from './combo-status-project/combo-status-project.component';


@Component({
  selector: 'matbea-projects-list-page',
  templateUrl: './projects-list-page.component.html',
  styleUrls: ['./projects-list-page.component.css']
})
export class ProjectsListPageComponent implements OnInit {
  finderObj: { [key: string]: number | string } = {}
  valueToSelectStatus$ = this.store$.select(ShofarSelects.getOptionsComboStatus)
  sub: Subscription = new Subscription();
  status = '4';
  hativa ='3';
  agaf='0';
  sektor='0';
  makal='0';
  valueToSelectStatus
  defaultStatus: boolean;
  @ViewChild(ComboStatusProjectComponent) statusCombo: ComboStatusProjectComponent;
  @ViewChild(HipusLefiPerteyProjectComponent) perteyProect: HipusLefiPerteyProjectComponent;

  constructor(private store$: Store<State>) {
  }

  ngOnInit(): void {
    this.sub.add(
      this.valueToSelectStatus$.subscribe(
        (v) => this.valueToSelectStatus = v))
  }

  // onFilter($event: { [keys: string]: number | string }) {
  //   this.finderObj = {}
  //   Object.keys($event).forEach((key) => {
  //     if ($event[key]) {
  //       this.finderObj[key] = $event[key];
  //       console.log("this.finderObj[key]", this.finderObj[key])
  //     }
  //   })
  //}
  toDefaultValue($event) {
    this.finderObj = {};
    this.finderObj['staus']=this.status;
    if ($event == "hierarhi") {
      this.perteyProect.toDefaultValue();
    }
    if ($event == "perteyProect") {
   //TODO hierarhia to defoult
    }
  }


  findProjects() {
    console.log('hativa---->', this.hativa);
    console.log('agaf---->', this.agaf);
    console.log('sektor---->', this.sektor);
    console.log('makal---->', this.makal);
    console.log('status---->', this.status);

    this.store$.dispatch(ShofarActions.findProjectsWithHierarhia({hativa: this.hativa, agaf: this.agaf, sektor: this.sektor, makal: this.makal, status: this.status.toString()}))

  }

  outFromSelectStatus($event: any) {
    console.log("Status to fing", $event);
    this.status=$event.id;
    // this.finderObj = {};
    // if ($event) {
    //   this.finderObj = {"teurStatusBitzua": $event.shortDesc}
    // }


  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  fromHierarchia($event){
    console.log('----> fromHierarchia = ' + $event);
    var data = JSON.parse($event);
    this.hativa= data.misparChativaa;
    this.agaf= data.misparAgaf?data.misparAgaf:"0";
    this.sektor=data.kodSector?data.kodSector:"0";
    this.makal=data.misparMakal?data.misparMakal:"0";

    console.log(data);
  }
}
