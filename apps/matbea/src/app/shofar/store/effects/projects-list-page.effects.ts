import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as ShofarActions from '../actions/shofar.actions';
import {mergeMap, map} from 'rxjs/operators';
import { ShofarServices } from '../../services/shofar-services';

// import {ShofarActions} from '@shofar/store'

@Injectable()
export class ProjectsListPageEffects {
  initComboStatus$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShofarActions.initComboStatus, ShofarActions.init),
      mergeMap(() =>
        this.service.getComboStatusToProjectsListPage().pipe(
          map((date) => {
            if (date) {
              return ShofarActions.setOptionsComboStatusSuccess({optionsComboStatus: date})
            } else {
              return ShofarActions.setOptionsComboStatusError({message: " ComboStatus don't seting"})
            }
          })
        )
      )
    )
  )


  constructor(private actions$: Actions, private service: ShofarServices) {
  }

}
