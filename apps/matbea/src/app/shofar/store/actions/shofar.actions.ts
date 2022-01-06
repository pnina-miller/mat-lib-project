import {createAction, props} from '@ngrx/store';
import {Project} from '../models/project.model';
import {ColumnDefinition} from '../models/column-definition.model';


export const init = createAction(' Inint shofar Page');

export const initProjectList = createAction(
  'Init Project List',
)
export const loadProjectListSuccess = createAction(
  'Load Project List Success',
  props<{ projectsList: Project[], teurStatusBitzua: string[], loadingProjects: boolean }>()
)
export const loadProjectListError = createAction(
  'Load Project List Error',
  props<{ loadingProjects: boolean, messages: string[] }>()
)

export const initColumnDefinitions = createAction(
  'Init Column Definitions ',
)
export const loadColumnDefinitionsSuccess = createAction(
  'Load Column Definitions Success',
  props<{ columnDefinitions: ColumnDefinition[], loadingColumnDefinitions: boolean }>()
)
export const loadColumnDefinitionsError = createAction(
  'Load Column Definitions Error',
  props<{ loadingColumnDefinitions: boolean }>()
)
export const initComboStatus=createAction(
  'Init Combo Status',
)
export const setOptionsComboStatusSuccess = createAction(
  'Set options comboStatus succes',
  props<{optionsComboStatus: any[]}>()
)
export const setOptionsComboStatusError =createAction(
  'Set options comboStatus error',
  props<{message:string}>()
)
export const setLoadingTable =createAction(
  'Set loading Table',
  props<{loadingTable:boolean}>()
)
export const updateColumnDefinitions = createAction(
  'Update Column Definitions ',
  props<{ columnDefinitions: ColumnDefinition[], loading: boolean, loadingTable:boolean }>()
)
export const updateAndSaveInDBColumnDefinitions = createAction(
  'Update and Save in DB Column Definitions ',
  props<{ columnDefinitions: ColumnDefinition[], loading: boolean, loadingTable:boolean }>()
)

export const updateAndSaveInDBColumnDefinitionsSuccess = createAction(
  'Update and Save in DB Column Definitions Success ',
  props<{columnDefinitions: ColumnDefinition[] ,loading: boolean, loadingTable:boolean }>()
)
export const updateAndSaveInDBColumnDefinitionsError = createAction(
  'Update and Save in DB Column Definitions Error ',
  props<{ loading: boolean, loadingTable:boolean }>()
)
export const addNewProject = createAction(
  'Add New Project',
  props<{ newProject: Project }>()
)
export const addNewProjectSuccess = createAction(
  'Add New Project Success',
  props<{ newProject: Project }>()
)

export const dummyAction = createAction(
  'Dummy Action',
  props<{}>()
)
export const findProjectsByFilter = createAction(
  'Find projects by filter',
  props<{ finderObject: { [key: string]: number | string } }>()
)

export const findProjectsWithHierarhia = createAction(
  'Find projects by hierarhia',
  props<{  hativa: string;  agaf: string;
     sektor:string; makal:string; status:string; }>()
)

export  const setProjectListLenght = createAction(
  'Set project list lenght ',
  props<{projectListLenght: number}>()
)
