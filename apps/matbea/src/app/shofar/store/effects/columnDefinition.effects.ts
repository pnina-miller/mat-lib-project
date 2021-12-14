import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import * as ShofarActions from '../actions/shofar.actions';
import { mergeMap, map, tap} from 'rxjs/operators';
import { ColumnDefinition } from 'libs/matbea-ui-components/src/lib/models/column-definition.model';
import {ShofarServices} from "../../services/shofar-services";



@Injectable()
export class ColumnDefinitionsEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShofarActions.initColumnDefinitions, ShofarActions.init),
      mergeMap(() =>
        this.service.getColumnDefinitions().pipe(
          map((data: ColumnDefinition[]) => {
            let res: string[] = [];
            let columns = data.map((v: ColumnDefinition) => {
              v.columnnameenglish = this.FirstLetterToLou(v.columnnameenglish);

              if (v.columnnameenglish == "shmKablanimMeshurshar") {
                v.columnformatter = 'array';

              }
              if(v.columnnameenglish =='teurStatusBitzua'){
                v.columnformatter ='status';
              }
              if (!res.includes(v.columnnameenglish)) {
                res.push(v.columnnameenglish);
                return v
              } else {
                return null
              }
            }).filter((v) => v ? true : false);
            return ShofarActions.loadColumnDefinitionsSuccess({ columnDefinitions: columns, loadingColumnDefinitions: false });
          }),
          tap(v => console.log('TAP:', v)),
          // take(1)
        )
      )
    )
  );

  update$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ShofarActions.updateAndSaveInDBColumnDefinitions),
      mergeMap((action) =>
        this.service.updateColumnDefinitions(action.columnDefinitions).pipe(
          map((data) => {
            if (data) {
              return ShofarActions.updateAndSaveInDBColumnDefinitionsSuccess({ columnDefinitions: action.columnDefinitions, loading: false, loadingTable: false });
            } else {
              return ShofarActions.updateAndSaveInDBColumnDefinitionsError({ loading: false, loadingTable: false });
            }

          }),
          tap(v => console.log('TAP:', v)),
          // take(1)
        )
      )
    )
  );

  constructor(private actions$: Actions, private service: ShofarServices) { }
  FirstLetterToLou(st: string): string {
    st = st.charAt(0).toLowerCase() + st.slice(1);
    return st.trim();
  }
}
