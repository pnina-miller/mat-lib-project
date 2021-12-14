import { createReducer, on } from '@ngrx/store';
import * as ProjectDetailsActions from '../actions/project-details.actions';
import {StateProjectDetails} from "../state/project-details.state";

export const PROJECTDETAILS_FEATURE_KEY = 'projectDetails';

export const initialProjectDetailsState: StateProjectDetails = {
  error: "",
  loaded: false,
  id: '0',
}
const projectDetailsReducer = createReducer(
  initialProjectDetailsState,
  on(ProjectDetailsActions.init, (state,action) => ({
    ...state,
    id:action.id
  })),
  on(ProjectDetailsActions.loadProjectDetailsSuccess, (state,action)=>({
    ...state,
    id: action.project.misparProyectSagur+'&'+action.project.kodMutavBeShovar,
    project: action.project,
    citiesComboBox: action.citiesComboBox,
    divurMichtavShichrurCombo: action.divurMichtavShichrurCombo,
    ezorCombo: action.ezorCombo,
    karkaProyectCombo: action.karkaProyectCombo,
    shemMefakeachCombo: action.shemMefakeachCombo,
    shitatLivuyCombo: action.shitatLivuyCombo,
    statusCombo: action.statusCombo
  }))

);

export function reducerProjectDetails(state, action) {
  return projectDetailsReducer(state, action);
}
