import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralResponse, Error } from 'libs/matbea-shared-components/src/lib/beans/general-response';

import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { ProjectBasicDetailsService } from './project-basic-details.service';
import { GeneralComboEntry } from '../../../../../../../../libs/matbea-shared-components/src/lib/matbea-hierarchy/matbea-hierarchy-general-combo/general-combo-interface';
import { ShofarServices } from '../../../services/shofar-services';
import { SHITAT_LIVUY_BUTTONS_ARRAY, DIVUR_MICHTAV_SHICHRUR_BUTTONS_ARRAY, KARKA_PROJECT_BUTTONS_ARRAY } from '../../../common-components/common-shofar-constants';
import { RadioButtonTabEntry } from '../../../../../../../../libs/matbea-ui-components/src/lib/radio-button-tab/radio-button-tab.component';
import { ProjectBasicDetailsContainerComponent } from '../project-basic-details-container/project-basic-details-container.component';





@Component({
  selector: 'matbea-project-basic-details',
  templateUrl: './project-basic-details.component.html',
  styleUrls: ['./project-basic-details.component.scss']
})
export class ProjectBasicDetailsComponent implements OnInit {
  @Input('kodMutav') kodMutav: string;
  @Input('misparProject') misparProject: string;

  projectDetails: ProjectDetailsData;
  mefakeachComboBox: GeneralComboEntry[];
  statusCombo: GeneralComboEntry[];
  ezorCombo: GeneralComboEntry[];
  citiesComboBox: GeneralComboEntry[];

  citiesControl = new FormControl();
  filteredCitiesComboBox: Observable<GeneralComboEntry[]>;

  editMode: boolean = false;

  shitatLivuyButtonsArray: RadioButtonTabEntry[] = SHITAT_LIVUY_BUTTONS_ARRAY;
  divurMichtavShichrurButtonsArray: RadioButtonTabEntry[] = DIVUR_MICHTAV_SHICHRUR_BUTTONS_ARRAY;
  karkaComboBox: RadioButtonTabEntry[] = KARKA_PROJECT_BUTTONS_ARRAY;

  errorMsg: string = "";

  constructor(private http: HttpClient, private shofarServices: ShofarServices, public basicDetailsService: ProjectBasicDetailsService) { }

  ngOnInit(): void {
    this.basicDetailsService.init(this);
    this.getPirteyProject();
  }



  getPirteyProject(): void{
    this.errorMsg = "";
    this.shofarServices.getPirteyProject(this.kodMutav, this.misparProject).subscribe(resp => {            
      let generalResponse = resp as GeneralResponse;
      this.projectDetails = (generalResponse.data as ProjectDetailsResponse).avcmp02m;
      this.mefakeachComboBox = (generalResponse.data as ProjectDetailsResponse).shemMefakeachCombo;
      this.statusCombo = (generalResponse.data as ProjectDetailsResponse).statusCombo;
      this.ezorCombo = (generalResponse.data as ProjectDetailsResponse).ezorCombo;
      this.citiesComboBox = (generalResponse.data  as ProjectDetailsResponse).citiesComboBox;

      let taarichLivuyYear = Number(this.projectDetails.taarich8HeskemLivuy.substring(0, 4));
      let taarichLivuyMonth = Number(this.projectDetails.taarich8HeskemLivuy.substring(4, 6)) - 1;
      let taarichLivuyDay = Number(this.projectDetails.taarich8HeskemLivuy.substring(6, 8));
      this.projectDetails.taarich8HeskemLivuyDt = new Date(taarichLivuyYear, taarichLivuyMonth, taarichLivuyDay);
     

      this.filteredCitiesComboBox = this.citiesControl.valueChanges
          .pipe(
            startWith(''),
            map(id => typeof id === 'string' ? id : id.description),
            map(value => value ? this._filter(value) : this.citiesComboBox.slice())
          );
    });     
    
  }


  changeMode(): void{
    this.editMode = !this.editMode;
  }

  private _filter(name: string): GeneralComboEntry[] {
    const filterValue = name.toLowerCase();

    return this.citiesComboBox.filter(option => option.value.toLowerCase().indexOf(filterValue) === 0);
  }



  saveProjectDetails(projectBasicDetailsContainerRef: ProjectBasicDetailsContainerComponent): void{   
    this.errorMsg = "";
    this.projectDetails.taarich8HeskemLivuy = this.convertDateToSting(this.projectDetails.taarich8HeskemLivuyDt);
      
    this.shofarServices.savePirteyProject(this.projectDetails).subscribe(resp => {   
      let generalResponse = resp as GeneralResponse;
      if(generalResponse.messages != null && generalResponse.messages.global.fyi.length > 0){
        let errorMessageArr: Error[] = generalResponse.messages.global.fyi;
        this.errorMsg = errorMessageArr[0].message;
      }else{
        this.getPirteyProject();      
        this.changeMode();   
        projectBasicDetailsContainerRef.basicDetailsEditMode = false;     
      }
    }, error => {
        this.errorMsg = error.message;        
    },);
  
  }

  convertDateToSting(date: Date): string{
    let year: string = "" + this.projectDetails.taarich8HeskemLivuyDt.getFullYear();
    let month: string = "" + (this.projectDetails.taarich8HeskemLivuyDt.getMonth() + 1);
    if(month.length == 1){
      month = "0" + month;
    }
    let day: string = "" + (this.projectDetails.taarich8HeskemLivuyDt.getUTCDate() + 1);
    if(day.length == 1){
      day = "0" + day;
    }
    let taaraichLivuyDate: string = year + month + day;

    return taaraichLivuyDate;
  }

}



export interface ProjectDetailsResponse{
  avcmp02m: ProjectDetailsData;
  shemMefakeachCombo: GeneralComboEntry[];
  statusCombo: GeneralComboEntry[];
  ezorCombo: GeneralComboEntry[];
  citiesComboBox: GeneralComboEntry[];
}


export interface ProjectDetailsData{
  kodMutavBeShovar: string;
  misparBank: number;
  misparSnif: number;
  misparCheshbon: number;
  shemCheshbon: string;
  kodBaalutKarka: string;
  kodChevratDivur: string;
  kodShamaiMefakeach: string;
  kodShitatLivuy: string;
  kodStatusAcharon: string;
  metegChiyuvMaam: number;
  metegPakadArvuyot: number;
  metegPakadHatzeg: string;
  metegPakadShmor: string;
  metegYokra: number;
  misparEzor: string;
  misparMakalOPakid: string;
  misparProyectSagur: string;  
  misparYishuv: string;
  misparZihuyLakoach: string;
  moneHodaot: string;
  mtgProyectSagurSdct: number;  
  shemLakoachKolel: string;
  shemMefakeachChadash: string;
  shemMenahelLakochot: string;
  shemProyectSagur: string;
  shemProyectSagurAng: string;
  shemShamaiMefakeach: string;
  shuratMelel800: string;
  taarich8HeskemLivuy: string;
  taarich8HeskemLivuyDt: Date;
  teurShemYishuvCds: string;
  teurShitatLivuy: string;
  teurStatusBitzua: string;
  sugYeshutNhlProyect: number;
  metegGarBaEzor: number;
  teurChevratDivur: string;
  teurBaalutKarka: string;
}