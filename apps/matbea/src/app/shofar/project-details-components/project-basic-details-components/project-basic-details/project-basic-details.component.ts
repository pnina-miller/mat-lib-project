import {Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges} from '@angular/core';
import {Subscription} from 'rxjs';
import * as ProjectDetailsSelectors from '../../../store/selectors/project-details.selectors';
import {Store} from "@ngrx/store";
import {StateProjectDetails} from "../../../store/state/project-details.state";
import * as ProjectDetailsActions from '../../../store/actions/project-details.actions';
import { Message } from '../../../../../../../../libs/matbea-shared-components/src/lib/beans/general-response';


function getDateFromString(taarich8HeskemLivuy: String): Date {
  if (taarich8HeskemLivuy && taarich8HeskemLivuy.trim().length == 8) {
    let year = Number.parseInt(taarich8HeskemLivuy.substr(0, 4));
    let mounth = Number.parseInt(taarich8HeskemLivuy.substr(4, 2));
    let day = Number.parseInt(taarich8HeskemLivuy.substr(6, 2));
    let data = new Date();
    data.setFullYear(year, mounth, day);
    return data;
  }
}

function getStringFromDate(taarich8HeskemLivuy: Date): string {
  let month: string = taarich8HeskemLivuy.getMonth().toString();
  let day: string = taarich8HeskemLivuy.getDay().toString();
  
  if (month.length < 2) {
    month = '0' + month;
  }

  if (day.length < 2) {
    day = '0' + day
  }

  return `${taarich8HeskemLivuy.getFullYear()}${month}${day}`;
}

@Component({
  selector: 'matbea-project-basic-details',
  templateUrl: './project-basic-details.component.html',
  styleUrls: ['./project-basic-details.component.scss']
})
export class ProjectBasicDetailsComponent implements OnInit,OnChanges {
  @Input('kodMutav') kodMutav: string;
  @Input('misparProject') misparProject: string;
  @Output() hold= new EventEmitter();
  @Input() editMode: boolean = false;
  projectDetails_$ = this.store$.select(ProjectDetailsSelectors.getProject);
  mefakeachComboBox_$ = this.store$.select(ProjectDetailsSelectors.getShemMefakeachCombo);
  statusCombo_$ = this.store$.select(ProjectDetailsSelectors.getStatusCombo);
  ezorCombo_$ = this.store$.select(ProjectDetailsSelectors.getEzorCombo);
  citiesComboBox_$ = this.store$.select(ProjectDetailsSelectors.getCitiesComboBox);
  shitatLivuyCombo_$ = this.store$.select(ProjectDetailsSelectors.getShitatLivuyCombo);
  divurMichtavShichrurCombo_$ = this.store$.select(ProjectDetailsSelectors.getDivurMichtavShichrurCombo);
  karkaProyectCombo_$ = this.store$.select(ProjectDetailsSelectors.getKarkaProyectCombo);
  //
  project: any;
  mefakeachComboBox_;
  statusCombo_;
  ezorCombo_;
  citiesComboBox_;
  shitatLivuyCombo_;
  divurMichtavShichrurCombo_;
  karkaProyectCombo_;
  taarich8HeskemLivuy_;
  sub: Subscription = new Subscription();
  errorMsg: string = "";


  constructor(private store$: Store<StateProjectDetails>) {
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes?.editMode&&!changes.editMode.firstChange){
      this.changeMode(changes?.editMode.currentValue)
    }
  }
  ngOnInit(): void {
    this.sub.add(
      this.projectDetails_$.subscribe(
        (project) => {
          this.project={};
          if (project) {
            let keys = Object.keys(project);
            keys.map(k => {
              this.project[k] = project[k];
            })
            this.taarich8HeskemLivuy_ = getDateFromString(this.project['taarich8HeskemLivuy'])
          }
        }
      )
    );
    this.sub.add(
      this.mefakeachComboBox_$.subscribe(
        (mefakeach) => {
          if (mefakeach) {
            this.mefakeachComboBox_ = mefakeach.map(m => {
                return {id: m.id, value: m.value, disable: (m.value == 'בחר')}
              }
            )
          }
        }
      )
    );
    this.sub.add(
      this.statusCombo_$.subscribe(
        (status) => {
          if (status) {
            this.statusCombo_ = status.map(s => {
              return {id: s.id, value: s.value}
            })
          }
        }
      )
    );
    this.sub.add(
      this.ezorCombo_$.subscribe(
        (ezor) => {
          if (ezor) {
            this.ezorCombo_ = ezor.map(e => {
              return {id: e.id, value: e.value, disable: (e.value == 'בחר')}
            })
          }
        }
      )
    )
    this.sub.add(
      this.citiesComboBox_$.subscribe(
        (citi) => {
          if (citi) {
            this.citiesComboBox_ = citi.map(c => c.value);
          }
        }
      )
    )
    this.sub.add(
      this.shitatLivuyCombo_$.subscribe(
        (shita) => {
          if (shita)
            this.shitatLivuyCombo_ = shita.filter(sh => sh.value != 'בחר').map(sh => {
              return {value: sh.id, name: sh.value};
            })
        }
      )
    )
    this.sub.add(
      this.divurMichtavShichrurCombo_$.subscribe(
        (divur) => {
          if (divur) {
            this.divurMichtavShichrurCombo_ = divur.map(d => {
              let div = {value: d.value, name: d.shortDesc}
              return div;
            })
          }
        }
      )
    )
    this.sub.add(
      this.karkaProyectCombo_$.subscribe(
        (karka) => {
          if (karka) {
            this.karkaProyectCombo_ = karka.filter(k => k.shortDesc != "בחר").map((k) => {
              return {value: k.value, name: k.shortDesc}
            })
          }
        }
      )
    )
  }

  changeMode($event): boolean {
    if (!$event) {
      this.saveProjectDetails();
    }
     this.editMode = $event;
    return true;
  }

  saveProjectDetails(): void {
    this.errorMsg = "";
    this.store$.dispatch(ProjectDetailsActions.saveProjectDetails({project: this.project}))
  }
  setKodChevratDivur($event: any) {
    console.log('setKodChevratDivur ', $event);
    this.project['kodChevratDivur'] = $event?.value;
    this.project['teurChevratDivur'] = $event.name;
  }
  setKodShitatLivuy($event: any) {
    console.log('setKodShitatLivuy ', $event);
    this.project['teurShitatLivuy'] = $event.name;
    this.project['kodShitatLivuy'] = $event.value;
  }
  setKarkaProyect($event: any) {
    console.log('setKarkaProyect ', $event);
    this.project['kodBaalutKarka'] = $event.value;
    this.project['teurBaalutKarka'] = $event.name;
  }
  console($event) {
    console.log("console ", $event);

  }
  setTaarich8HeskemLivuy($event) {
    this.taarich8HeskemLivuy_ = $event.value;
    this.project['taarich8HeskemLivuy'] = getStringFromDate($event.value);

  }
  setStatusBitzua($event: any) {
    this.project['kodStatusAcharon'] = $event?.id;
    this.project['teurStatusBitzua'] = $event?.value;

  }
  setShamaiMefakeach($event: any) {
    this.project['kodShamaiMefakeach'] = $event.id;
    this.project['shemShamaiMefakeach'] = $event.value;
  }
}

