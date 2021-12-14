import { RouterReducerState } from '@ngrx/router-store';
import { Project } from '../models/project.model';
import { ColumnDefinition } from '../models/column-definition.model';



export interface State {

  loadingColumnDefinitions: boolean;
  loadingProjects: boolean;
  loading: boolean;
  loadingTable: boolean;
  router?: RouterReducerState;
  projects: Project[];
  projectsWithFilter?: Project[];
  columnDefinitions: ColumnDefinition[];
  updateInDBColumnDefinitions: boolean;
  finderObject?: any
  teurStatusBitzuaInProjects?: string[]
  optionsComboStatus?: any,
  messagesToTable?: any[]

}

export const initialState: State = {
  projects: null,
  loadingColumnDefinitions: true,
  loadingProjects: true,
  updateInDBColumnDefinitions: false,
  loadingTable: true,
  loading: true,
  columnDefinitions: [
    {
      columnnameenglish: "shemSector",
      columnnamehebrew: "יח' מנהלת",
      display: "1",
      ordernumber: "1",
      removable: "1",

    },
    {
      columnnameenglish: "shemMenahelLakochot",
      columnnamehebrew: "שם מק\"ל",
      display: "1",
      ordernumber: "2",
      removable: "1",

    },
    {
      columnnameenglish: "misparProyectSagur",
      columnnamehebrew: "מס'",
      display: "1",
      ordernumber: "3",
      removable: "1",

    },

    {
      columnnameenglish: "shemProyectSagur",
      columnnamehebrew: "שם פרויקט",
      display: "1",
      ordernumber: "4",
      removable: "0",
    },
    {
      columnnameenglish: "teurMisparCheshbon",
      columnnamehebrew: "חשבון מוביל",
      display: "1",
      ordernumber: "5",
      removable: "1",
    },
    {
      columnnameenglish: "shmKablanimMeshurshar",
      columnnamehebrew: "קבלן\\נים",
      display: "1",
      ordernumber: "6",
      removable: "1",
    },

    {
      columnnameenglish: "shemYishuv",
      columnnamehebrew: "ישוב",
      display: "1",
      ordernumber: "7",
      removable: "1",

    },

    {
      columnnameenglish: "kamutYechidotDiyur",
      columnnamehebrew: "כמות יח'",
      display: "1",
      ordernumber: "8",
      removable: "1",

    },
    {
      columnnameenglish: "kamutYechidotMechurot",
      columnnamehebrew: "כמות יחידות מכורות",
      display: "1",
      ordernumber: "9",
      removable: "1",

    },

    {
      columnnameenglish: "kmtYcdNimkeruBeTkf",
      columnnamehebrew: "תוך 3 חודשים",
      display: "1",
      ordernumber: "10",
      removable: "1",

    },

    {
      columnnameenglish: "shoviYechidotMechurot",
      columnnamehebrew: "שווי לפי דוח אפס",
      display: "1",
      ordernumber: "11",
      removable: "1",

    },

    {
      columnnameenglish: "schumChozeLeloMaam",
      columnnamehebrew: "סכום חוזים ללא מע\"מ",
      display: "1",
      ordernumber: "12",
      removable: "1",

    },

    {
      columnnameenglish: "teurStatusBitzua",
      columnnamehebrew: "סטטוס",
      display: "1",
      ordernumber: "13",
      removable: "1",

    },

    {
      columnnameenglish: "kodMutavBeShovar",
      columnnamehebrew: "קוד מוטב",
      display: "0",
      ordernumber: "14",
      removable: "1",

    },

    {
      columnnameenglish: "misparMakal",
      columnnamehebrew: "מספר מק\"ל",
      display: "0",
      ordernumber: "15",
      removable: "1",

    },

    {
      columnnameenglish: "kodSector",
      columnnamehebrew: "קוד סקטור",
      display: "0",
      ordernumber: "16",
      removable: "1",

    }
  ]
};

export function getInitialState(): State {
  return initialState;
}
