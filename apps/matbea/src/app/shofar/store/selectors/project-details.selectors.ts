import { createFeatureSelector, createSelector } from '@ngrx/store';
import {PROJECTDETAILS_FEATURE_KEY} from '../reducers/project-details.reducer';
import {StateProjectDetails} from "../state/project-details.state";


// Lookup the 'ProjectDetails' feature state managed by NgRx
export const projectDetailsState = createFeatureSelector<StateProjectDetails>(PROJECTDETAILS_FEATURE_KEY);

export const getProjectDetailsLoaded = createSelector(projectDetailsState,projectDetailsState => projectDetailsState.loaded);

export const getProjectDetailsError = createSelector(
  projectDetailsState ,
  (projectDetailsState ) => projectDetailsState.error
);
export const getProject= createSelector(
  projectDetailsState ,
  (projectDetailsState) => projectDetailsState.project
);
export const getCitiesComboBox= createSelector(
  projectDetailsState ,
  (projectDetailsState) => projectDetailsState.citiesComboBox
);
export const getDivurMichtavShichrurCombo= createSelector(
  projectDetailsState ,
  (projectDetailsState) => projectDetailsState.divurMichtavShichrurCombo
);
export const getKarkaProyectCombo= createSelector(
  projectDetailsState ,
  (projectDetailsState) => projectDetailsState.karkaProyectCombo
);
export const getEzorCombo= createSelector(
  projectDetailsState ,
  (projectDetailsState) => projectDetailsState.ezorCombo
);
export const getShemMefakeachCombo= createSelector(
  projectDetailsState ,
  (projectDetailsState) => projectDetailsState.shemMefakeachCombo
);
export const getShitatLivuyCombo= createSelector(
  projectDetailsState ,
  (projectDetailsState) => projectDetailsState.shitatLivuyCombo
);
export const getStatusCombo= createSelector(
  projectDetailsState ,
  (projectDetailsState) => projectDetailsState.statusCombo
);
export const getPratimBsisiim= createSelector(
  projectDetailsState ,
   (projectDetailsState) => {return {project: projectDetailsState.project,
     citiesComboBox: projectDetailsState.citiesComboBox,
    divurMichtavShichrurCombo: projectDetailsState.divurMichtavShichrurCombo,
     karkaProyectCombo: projectDetailsState.karkaProyectCombo,
     ezorCombo: projectDetailsState.ezorCombo,
     shemMefakeachCombo: projectDetailsState.shemMefakeachCombo,
     shitatLivuyCombo: projectDetailsState.shitatLivuyCombo,
     statusCombo: projectDetailsState.statusCombo}}
  // (projectDetailsState) =>projectDetailsState.project
);
