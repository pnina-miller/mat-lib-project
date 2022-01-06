import {createReducer, on, Action} from '@ngrx/store';
import * as ShofarActions from '../actions/shofar.actions';
import {getInitialState, State} from '../state/shofar.state';



export const SHOFAR_FEATURE_KEY = 'shofar';
export const initialState = getInitialState();
const shofarReducer = createReducer(
  initialState,
  on(ShofarActions.initProjectList, (state) => ({...state, loading: true, loadingTable:true, error: null})),
  on(ShofarActions.loadProjectListSuccess, (state, action) => ({
    ...state,
    projectsWithFilter: action.projectsList,
    loadingProjects: action.loadingProjects,
    teurStatusBitzuaInProjects: action.teurStatusBitzua,
    loading: (state.loadingColumnDefinitions || action.loadingProjects)&&state.loading,
    loadingTable: state.loadingColumnDefinitions || action.loadingProjects,
    messagesToTable: [],
  })),
  on(ShofarActions.loadProjectListError,(state, action) =>({
    ...state,
    loadingProjects: action.loadingProjects,
    loading: (state.loadingColumnDefinitions || action.loadingProjects)&&state.loading,
    loadingTable: action.loadingProjects,
    projectsWithFilter:[],
    messagesToTable: action.messages,
  })),
  on(ShofarActions.initColumnDefinitions, (state) => ({...state, loading: true,loadingTable: true, error: null})),
  on(ShofarActions.loadColumnDefinitionsSuccess, (state, action) => ({
    ...state,
    columnDefinitions: action.columnDefinitions,
    loadingColumnDefinitions: action.loadingColumnDefinitions,
    loading: (state.loadingProjects || action.loadingColumnDefinitions)&&state.loading,
    loadingTable: state.loadingProjects || action.loadingColumnDefinitions
  })),
  on(ShofarActions.addNewProjectSuccess, (state, action) => ({
    ...state,
    projectsWithFilter: state.projectsWithFilter.concat(action.newProject)
  })),
  on(ShofarActions.updateAndSaveInDBColumnDefinitionsSuccess, (state, action) => ({
    ...state,
    columnDefinitions: action.columnDefinitions,
    loadingTable: action.loadingTable,
  })),
  on(ShofarActions.updateAndSaveInDBColumnDefinitionsError,(state,action)=>({
   ...state,
    loadingTable: action.loadingTable,
  })),
  on(ShofarActions.updateAndSaveInDBColumnDefinitions, (state, action) => ({
    ...state,
    loadingTable: action.loadingTable,
  })),
  on(ShofarActions.updateColumnDefinitions, (state, action) => ({
    ...state,
    columnDefinitions: action.columnDefinitions,
    loading: action.loading,
    loadingTable: action.loadingTable,
  })),
  on(ShofarActions.findProjectsByFilter, (state, action) => ({
    ...state,
    loadingTable: true,
 })),
  on(ShofarActions.setOptionsComboStatusSuccess, (state, action) => ({
    ...state,
    optionsComboStatus: action.optionsComboStatus
  })),

  on(ShofarActions.findProjectsWithHierarhia, (state, action) => ({
    ...state,
    loadingTable: true
  })),

on(ShofarActions.setLoadingTable, (state, action) => ({
  ...state,
  loadingTable: action.loadingTable
})),
  on(ShofarActions.setProjectListLenght,(state, action)=>({
    ...state,
    projectListLenght: action.projectListLenght
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return shofarReducer(state, action);
}
