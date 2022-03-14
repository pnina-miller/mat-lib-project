import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';
import * as ShofarActions from '../actions/shofar.actions';
import {mergeMap, map, tap, take} from 'rxjs/operators';

import {initProject} from '../models/project.model';
import {ShofarServices} from '../../services/shofar-services';


@Injectable()
export class ProjectsListEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShofarActions.initProjectList, ShofarActions.init),
      mergeMap(() =>
        this.service.getProjectList().pipe(
          map((res) => {debugger
            let projecs = [];
            let statusBitzua: string[] = [];
            if (res.data != null && res.data.projectsList && res.data.projectsList.length > 0) {
              projecs = res.data.projectsList.map((v) => {
                if (v) {
                  return initProject(v);
                }

              })
              return ShofarActions.loadProjectListSuccess({
                projectsList: projecs,
                teurStatusBitzua: statusBitzua,
                loadingProjects: false
              });

            } else {
              return ShofarActions.loadProjectListError({loadingProjects: false, messages: res.messages})
            }
          }),
          tap(v => console.log('TAP:', v)),
          take(1)
        )
      )
    )
  );


  addNewProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShofarActions.addNewProject),
      mergeMap((action) =>

        this.service.addNewProject(action.newProject).pipe(
          map((data) => {
            return ShofarActions.addNewProjectSuccess({newProject: action.newProject});
          }),
        )
      )
    )
  );
  getProjectsByProjectFacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShofarActions.findProjectsByFilter),
      mergeMap((action) =>
        this.service.getProjectListByProjectFacts(action.finderObject).pipe(
          map((res) => {
            let projecs = [];
            let statusBitzua: string[] = []
            if (res.data != null && res.data.projectsList != null&& res.data.projectsList.length > 0) {
              projecs =res.data.projectsList.map((v) => {
                if (v) {
                  return initProject(v);
                }

              })
              return ShofarActions.loadProjectListSuccess({
                projectsList: projecs,
                teurStatusBitzua: statusBitzua,
                loadingProjects: false
              });

            } else {
              return ShofarActions.loadProjectListError({loadingProjects: false, messages: res.messages})
            }
          }),
          tap(v => console.log('TAP:', v)),
          take(1)
        )
      )
    )
  )
  getProjectsWithHierarhia$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShofarActions.findProjectsWithHierarhia),
      mergeMap((action) =>
        this.service.getProjectsListWithHierarhia(action).pipe(
          map((res) => {
            let projecs = [];
            let statusBitzua: string[] = []
            if (res.data!= null && res.data.projectsList != null&& res.data.projectsList.length > 0) {
              projecs = res.data.projectsList.map((v) => {
                if (v) {
                  return initProject(v);
                }

              })
              return ShofarActions.loadProjectListSuccess({
                projectsList: projecs,
                teurStatusBitzua: statusBitzua,
                loadingProjects: false
              });

            } else {
              return ShofarActions.loadProjectListError({loadingProjects: false, messages: res.messages})
            }
          }),
          tap(v => console.log('TAP:', v)),
          take(1)
        )
      )
    )
  )


  constructor(private actions$: Actions, private service: ShofarServices) {
  }
}
