import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from '../store/state/shofar.state';
import * as ShofarSelectors from '../store/selectors/shofar.selectors';
import { StateProjectDetails } from '../store/state/project-details.state';
import * as ProjectDetailsSelectors from '../store/selectors/project-details.selectors';
import * as ProjectDetailsActions from '../store/actions/project-details.actions';
import { ShofarServices } from '../services/shofar-services';

@Component({
  selector: 'matbea-step-details',
  templateUrl: './step-details.component.html',
  styleUrls: ['./step-details.component.scss'],
})
export class StepDetailsComponent implements OnInit {
  id: any;
  kodMutavBeShovar: number;
  misparProyectSagur: number;
  step: any;
  project: any;
  projectsList$ = this.store$.select(ShofarSelectors.getProjectsWithFilter);
  project$ = this.storeProjectDetails$.select(
    ProjectDetailsSelectors.getProject
  );
  steps: { name: string; routTo: string }[] = [];

  constructor(
    private route: ActivatedRoute,
    private store$: Store<State>,
    private storeProjectDetails$: Store<StateProjectDetails>,
    private shofarServices: ShofarServices
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.misparProyectSagur = Number(this.id.split('&')[0]);
      this.kodMutavBeShovar = Number(this.id.split('&')[1]);
      this.steps.push(
        { name: 'רשימת פרויקטים', routTo: 'table' },
        { name: 'היילין מתחם הבורסה', routTo: 'table/details/'+this.id },
        { name: 'בניין 1', routTo: '' }
      );
      this.shofarServices
        .getpirteyShalav(this.misparProyectSagur)
        .subscribe((resp: any) => {
          this.step = resp.data.reshimatShlavimList[0];
        });

      this.project$.subscribe(
        (project) => {
          if (project) {
            this.project = project;
          } else {
            this.storeProjectDetails$.dispatch(
              ProjectDetailsActions.init({
                id: this.id,
                kodMutav: this.kodMutavBeShovar,
                misparProyectSagur: this.misparProyectSagur,
              })
            );
          }
        },
        () => {
          console.log('Project Error');
        }
      );
      this.projectsList$.subscribe(
        (projectsList) => {
          let selectedProject = projectsList.filter((project) => {
            if (project.misparProyectSagur == this.project.misparProyectSagur)
              return true;
          });

          if (selectedProject.length > 0) {
            this.project.kodMutavBeShovar = selectedProject[0].kodMutavBeShovar;
          }
        },
        (err) => {
          console.log('Error', err);
        },
        () => {
          console.log('Continiu');
        }
      );
    });
  }
}
