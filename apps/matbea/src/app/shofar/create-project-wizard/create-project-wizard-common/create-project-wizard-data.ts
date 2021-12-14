import { GeneralComboEntry } from "../../../../../../../libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-general-combo/general-combo-interface";




export class CreateProjectWizardData{
    kodMutavBeShovar: string; // = "7107957";
    misparProyectSagur: string;
	misparBank: number;
	misparSnif: number;
	misparCheshbon: number;
	shemCheshbon: string;
	shemProyectSagur: string;
	shemMenahelLakochot: string;       
    taarich8HeskemLivuy: string;
    kodShitatLivuy: string;
    teurShitatLivuy: string;
    kodStatusAcharon: string;
    teurStatusBitzua: string;
    kodShamaiMefakeach: string = '0';
    shemMefakeachChadash: string;
    shemShamaiMefakeach: string;
    misparYishuv: string;
    teurShemYishuvCds: string;
    metegYokra: number;
    metegPakadShmor: number;
    metegPakadHatzeg: number;
    metegPakadArvuyot: number;
    metegGarBaEzor: number;
    shuratMelel800: string;
    moneHodaot: string;
    misparMakalOPakid: string;
    misparZihuyLakoach: string;
    shemLakoachKolel: string;
    misparEzor: string='0';
    mtgProyectSagurSdct: number;
    kodBaalutKarka: string;
    kodChevratDivur: string;
    shemProyectSagurAng: string;
    metegChiyuvMaam: number;
    sugYeshutNhlProyect: number;
    KodStatusBitzua: number;


    kodAmala: string;
    sachHakolAmalaNeto: number;
    shiurAmlatArvutSna: number;    
    shiurAmlArvDiraOcls: number;
    shiurAmlArvLloHeter: number;
}


export interface WizardComboboxesResponse{
    mefakeachComboBox: GeneralComboEntry[];
    divurMichtaveyShichrurComboBox: GeneralComboEntry[];
    ezorComboBox:  GeneralComboEntry[];
    karkaComboBox: GeneralComboEntry[];
    citiesComboBox: GeneralComboEntry[];
    defaults: CreateProjectWizardData
}


