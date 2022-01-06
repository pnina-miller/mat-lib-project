import {createAction, props} from '@ngrx/store';

export const init = createAction(
  '[ProjectDetails Page] Init',
  props<{ id: string, kodMutav: number, misparProyectSagur: number }>()
);

export const loadProjectDetailsSuccess = createAction(
  '[ProjectDetails/API] Load ProjectDetails Success',
  props<{
    project: { [key: string]: number | string },
    citiesComboBox: { [key: string]: number | string } [],
    divurMichtavShichrurCombo: { [key: string]: number | string } [],
    ezorCombo: { [key: string]: number | string }[],
    karkaProyectCombo: { [key: string]: number | string } [],
    shemMefakeachCombo: { [key: string]: number | string } [],
    shitatLivuyCombo: { [key: string]: number | string }[],
    statusCombo: { [key: string]: number | string } []
  }>()
);

export const loadProjectDetailsFailure = createAction(
  '[ProjectDetails/API] Load ProjectDetails Failure',
  props<{ error: any }>()
);
export const saveProjectDetails = createAction(
  'Save Project details in DB',
  props<{
    project: any;
  }>()
);
export const saveProjectDetailsSuccess = createAction(
  'Save Project details in DB Success',
  props<{
    project: any, status:boolean
  }>()
);
export const saveProjectDetailsFailure = createAction(
  'Save Project details in DB Failure',
  props<{
   message:string, status:boolean;
  }>()
);
