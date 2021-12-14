import {Injectable} from '@angular/core';
import {createEffect, Actions, ofType} from '@ngrx/effects';
import * as ProjectDetailsActions from '../actions/project-details.actions';
import {mergeMap, map} from "rxjs/operators";
import {ShofarServices} from "../../services/shofar-services";
import {ProjectDetailsData} from "../../project-details-components/project-basic-details-components/project-basic-details/project-basic-details.component";

@Injectable()
export class ProjectDetailsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectDetailsActions.init),
      mergeMap((action) =>
        this.service.getPirteyProject(action.kodMutav.toString(), action.misparProyectSagur.toString()).pipe(
          map((x) => {
            if (x['data']) {
              return ProjectDetailsActions.loadProjectDetailsSuccess({
                project: x['data']['avcmp02m'],
                citiesComboBox: x['data']['citiesComboBox'],
                divurMichtavShichrurCombo: x['data']['divurMichtavShichrurCombo'],
                ezorCombo: x['data']['ezorCombo'],
                karkaProyectCombo: x['data']['ezorCombo'],
                shemMefakeachCombo: x['data']['ezorCombo'],
                shitatLivuyCombo: x['data']['ezorCombo'],
                statusCombo: x['data']['ezorCombo']
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
        this.service.savePirteyProject(action.project as ProjectDetailsData).pipe(
          map((data) => {
            if (data) {
              return ProjectDetailsActions.loadProjectDetailsSuccess({
                citiesComboBox: [],
                divurMichtavShichrurCombo: [],
                ezorCombo: [],
                karkaProyectCombo: [],
                shemMefakeachCombo: [],
                shitatLivuyCombo: [],
                statusCombo: [],
                project:data['data'].pirteyProject.avcmp02m});
            } else {
              return ProjectDetailsActions.saveProjectDetailsFailure;
            }
          }),
        )
      )
    )
  )


  constructor(private actions$: Actions, private service: ShofarServices) {
  }
}
