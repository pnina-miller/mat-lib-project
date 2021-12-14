import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Store} from "@ngrx/store";
import * as ProjectDetailsSelectors from '../../store/selectors/project-details.selectors';
import {Subscription} from "rxjs";
import {StateProjectDetails} from "../../store/state/project-details.state";
import * as ProjectDetailsActions from '../../store/actions/project-details.actions';
import {ProjectDetailsData} from "../project-basic-details-components/project-basic-details/project-basic-details.component";


@Component({
  selector: 'matbea-project-details-header',
  templateUrl: './project-details-header.component.html',
  styleUrls: ['./project-details-header.component.scss']
})
export class ProjectDetailsHeaderComponent implements OnInit, OnChanges {
  project$ = this.store$.select(ProjectDetailsSelectors.getProject);
  project: ProjectDetailsData;
  shemProyectSagur = '';
  shemProyectSagurAng = '';
  shuratMelel800 = '';
  shemMenahelLakochot = '';
  misparSnif = '';
  misparCheshbon = '';
  kodMutavBeShovar = '';
  misparProyectSagur;

  sub: Subscription = new Subscription();
  class: any;
  change: boolean = true;


  constructor(private store$: Store<StateProjectDetails>) {
  }

  ngOnInit(): void {
    this.sub.add(this.project$.subscribe((project) => {
      if (project) {
        this.project = project;
        this.shemProyectSagur = project['shemProyectSagur'] ? project['shemProyectSagur'] : '';
        this.shemProyectSagurAng = project['shemProyectSagurAng'] ? project['shemProyectSagurAng'] : '';
        this.shuratMelel800 = project['shuratMelel800'] ? project['shuratMelel800'] : '';
        this.shemMenahelLakochot = project['shemMenahelLakochot'] ? project['shemMenahelLakochot'] : '';
        this.misparSnif = project['misparSnif'] ? project['misparSnif'].toString() : '';
        this.misparCheshbon = project['misparCheshbon'] ? project['misparCheshbon'].toString() : '';
        this.kodMutavBeShovar = project['kodMutavBeShovar'] ? project['kodMutavBeShovar'].toString() : '';
        this.misparProyectSagur = project['misparProyectSagur'] ? project['misparProyectSagur'] : '';
      }
    }));

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("shinui ba project details header", this);

  }


  onShinui($event: boolean) {
    console.log("shinui", $event);
    this.change = $event;
    if (!$event) {
      this.class = 'project-details-header-shinui'
    } else {
      this.class = '';
      let v = {};
      let keys = Object.keys(this.project);
      keys.forEach((key) => {
        if (key == 'shemProyectSagur') {
          v[key] = this.shemProyectSagur;
        } else if (key == 'shemProyectSagurAng') {
          v[key] = this.shemProyectSagurAng;
        } else if (key == 'shuratMelel800') {
          v[key] = this.shuratMelel800;
        } else if(key == 'moneHodaot'){
          v[key] = this.shuratMelel800.length;
        }
         else {
          v[key] = this.project[key];
        }
      })
      this.store$.dispatch(ProjectDetailsActions.saveProjectDetails({project: v}));
    }

  }
}
