import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import * as ProjectDetailsActions from '../actions/project-details.actions';
import {mergeMap, map} from "rxjs/operators";
import {ShofarServices} from "../../services/shofar-services";

@Injectable()
export class ProjectDetailsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectDetailsActions.init),
      mergeMap((action) =>
        this.service.getPirteyProject(action.kodMutav.toString(), action.misparProyectSagur.toString()).pipe(
          map((x) => {
            if (x['data']) {
              console.log('project details effects ' + x['data'].toString)
              return ProjectDetailsActions.loadProjectDetailsSuccess({
                project: x['data']['avcmp02m'],
                citiesComboBox: x['data']['citiesComboBox'],
                divurMichtavShichrurCombo: x['data']['divurMichtavShichrurCombo'],
                ezorCombo: x['data']['ezorCombo'],
                karkaProyectCombo: x['data']['karkaProyectCombo'],
                shemMefakeachCombo: x['data']['shemMefakeachCombo'],
                shitatLivuyCombo: x['data']['shitatLivuyCombo'],
                statusCombo: x['data']['statusCombo']
              });
            } else {
              return ProjectDetailsActions.loadProjectDetailsFailure({error: ""});
            }
          }),
        )
      )
    )
  );
  saveProjectDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectDetailsActions.saveProjectDetails),
      mergeMap((action) =>
        this.service.savePirteyProject(action.project).pipe(
          map((data) => {
            if (data&&data['data'].pirteyProject.avcmp02m) {
              return ProjectDetailsActions.saveProjectDetailsSuccess({
                project: data['data'].pirteyProject.avcmp02m,
                status: true
              });
            } else {
              return ProjectDetailsActions.saveProjectDetailsFailure({
                message: '',
                status: false
              });
            }
          }),
        )
      )
    )
  )


  constructor(private actions$: Actions, private service: ShofarServices) {
  }
}
