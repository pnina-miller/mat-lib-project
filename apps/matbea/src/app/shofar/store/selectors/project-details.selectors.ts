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





