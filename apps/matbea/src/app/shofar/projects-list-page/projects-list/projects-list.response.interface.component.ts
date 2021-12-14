export interface ProjectsListResponse {    
    data: ProjectsListData;   
    messages: any;
    validatiors: any;
}

export interface ProjectsListData {    
    projectsList: ProjectsListEntry[];   
    showHirarchy: boolean;
    inputParameter: string;
}

export interface ProjectsListComboboxesResponse {    
    data: ProjectsListComboboxesData;
    messages: any;
    sindicatziaCombo: ComboBoxEntry[];   
    validations: any;
}


export interface ProjectsListComboboxesData {    
    projectStatusCombo: ComboBoxEntry[];
    shitatLivuyCombo: ComboBoxEntry[];
    sindicatziaCombo: ComboBoxEntry[];   
    avcmp01m: Avcmp01m;
}

interface Avcmp01m{
    misparProyectSagur: number;
    misparBank: number;
    misparSnif: number;
    misparCheshbon: number;
    kodMutavBeShovar: number;
    kodStatusBitzua: number;
    teurStatusBitzua: string;
    mtgPakadBcharPeilut: number;
    misparAgaf: string;
    kodSector: string;
    misparMakal: string;
    mprTatZvtCtvIsk: string;
    misparSadeLeMiyun: number;
    sederMiyunBeYeshut: number;
    mtgProyectSagurSdct: number;
    kodShitatLivuy: number;
}

interface ProjectsListEntry{
    misparTavla: number;
    misparShura: number;
    misparProyectSagur: number;
    kodMutavBeShovar: string;
    shemProyectSagur: string;
    shmKablanimMeshurshar: string;
    teurMisparCheshbon: string;
    shemYishuv: string;
    kamutYechidotDiyur: number;
    kodStatusBitzua: number;
    teurStatusBitzua: string;
    misparMakal: string;
    misparAgaf: string;
    kodSector: string;
    kamutYechidotMechurot: number;
    kmtYcdNimkeruBeTkf: number;
    shoviYechidotMechurot: number;
    schumChozeLeloMaam: number;
    achuzSchumChozim: number;
    shemSector: string;
    shemMenahelLakochot: string;
}

interface HierarchyCombo{
    agafList: AgafList;
    sectorList: SectorList;
    makalList: MakalList;
}

interface MakalList{
    misparMakal: string;
    firstName: string;
    lastName: string;
    makalName: string;
}


interface SectorList{
    sectorCode: string;
	sectorDescription: string;
}

interface AgafList{
    agafCode: string;
	agafDescription: string;
}

interface ComboBoxEntry {
    value: number;
    shortDesc: string;
    longDesc: string;
}