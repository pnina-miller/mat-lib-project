import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SHOFAR_FEATURE_KEY } from '../reducers/shofar.reducer';
import {State } from '../state/shofar.state';


// Lookup the 'Shofar' feature state managed by NgRx
export const state = createFeatureSelector<State>(
  SHOFAR_FEATURE_KEY
);

export const getShofarLoaded = createSelector(
  state,
  (state) => state.loading
);
export const getProjectList= createSelector(
  state,
  (state) =>state.projects
);

export const getColumnDefinitions=createSelector(
  state,
  (state) => state.columnDefinitions
)

export const getUpdateInDBColumnDefinitions=createSelector(
  state,
  (state) => state.updateInDBColumnDefinitions
)
export const getProjectsWithFilter=createSelector(
  state,
  (state)=>state.projectsWithFilter
)
export const getStatusProjects = createSelector(
  state,
  (state)=>state.teurStatusBitzuaInProjects
)
export const getOptionsComboStatus= createSelector(
  state,
  (state)=> state.optionsComboStatus
)
export const getLoadingTable= createSelector(
  state,
  (state)=> state.loadingTable
)
export const getMessagesToTable= createSelector(
  state,
  (state)=>state.messagesToTable
)
export const getProjectListLenght= createSelector(
  state,
  (state)=> state.projectListLenght
)


