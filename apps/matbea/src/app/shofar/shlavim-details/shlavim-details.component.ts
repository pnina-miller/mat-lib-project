

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
  selector: 'matbea-shlavim-details',
  templateUrl: './shlavim-details.component.html',
  styleUrls: ['./shlavim-details.component.scss'],
})
export class ShlavimDetailsComponent implements OnInit {
  id: any;
  kodMutavBeShovar: number;
  misparProyectSagur: number;
  shalav: any;
  projectsList$ = this.store$.select(ShofarSelectors.getProjectsWithFilter);
  project$ = this.storeProjectDetails$.select(
    ProjectDetailsSelectors.getProject
  );
  steps: { name: string; routTo: string }[] = [];
  misparShalav: string;

  constructor(
    private route: ActivatedRoute,
    private store$: Store<State>,
    private storeProjectDetails$: Store<StateProjectDetails>,
    private shofarServices: ShofarServices
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.misparShalav=params.get('misparShalav');
      this.id = params.get('id');
      this.misparProyectSagur = Number(this.id.split('&')[0]);
      this.kodMutavBeShovar = Number(this.id.split('&')[1]);
      this.shofarServices.getpirteyShalav(this.misparProyectSagur,1).subscribe((resp: any) => {
          this.shalav = resp;
          this.steps=[...this.steps,{ name:  resp.teurHaShlav, routTo: '' }];
        });

      this.project$.subscribe(
        (project) => {
          if (project) {
            this.steps=[ { name: 'רשימת פרויקטים', routTo: 'table' }, { name: project.shemProyectSagur, routTo: 'table/details/'+this.id }, ...this.steps ];
            this.shalav = project;
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
          let selectedProject = projectsList?.filter((project) => {
            if (project.misparProyectSagur == this.misparProyectSagur)
              return true;
          });

          if (selectedProject?.length > 0) {
            this.kodMutavBeShovar = selectedProject[0].kodMutavBeShovar;
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

