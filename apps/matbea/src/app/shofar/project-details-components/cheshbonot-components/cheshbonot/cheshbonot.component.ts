import { Component, OnInit, Input, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeneralResponse } from 'libs/matbea-shared-components/src/lib/beans/general-response';
import { of, Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { HosafatCheshbonComponent } from '../hosafat-cheshbon/hosafat-cheshbon.component';
import { FormGroup } from '@angular/forms';
import { CheshbonotService } from './cheshbonot.service';
import { ShofarServices } from '../../../services/shofar-services';
import { ColumnDefinition } from '../../../store/models/column-definition.model';
import { Project } from '../../../store/models/project.model';
import { Store } from '@ngrx/store';
import * as ShofarActions from '../../../store/actions/shofar.actions';
import { State } from '../../../store/state/shofar.state';

@Component({
  selector: 'matbea-cheshbonot',
  templateUrl: './cheshbonot.component.html',
  styleUrls: ['./cheshbonot.component.scss']
})




export class CheshbonotComponent implements OnInit {
  @Input('misparProyectSagur') misparProyectSagur: string;
  @Input('misparBank') misparBank: string;
  cheshbonotList: CheshbonLeProject[] = [];
  cheshbonotListObservable$: Observable<CheshbonLeProject[]> = this.getCheshbonotTableObservable();

  displayedColumns: ColumnDefinition[] = [{columnnameenglish: 'misparBank', columnnamehebrew: 'בנק', display: '1', ordernumber: '1', removable: 'false', style: 'text-align: right;padding:5px'},
                                          {columnnameenglish: 'misparSnif', columnnamehebrew: 'סניף', display: '1', ordernumber: '2', removable: 'false'},
                                          {columnnameenglish: 'misparCheshbon', columnnamehebrew: 'מס\' חשבון', display: '1', ordernumber: '3', removable: 'false'},
                                          {columnnameenglish: 'shemCheshbon', columnnamehebrew: 'שם חשבון', display: '1', ordernumber: '4', removable: 'false'},
                                          {columnnameenglish: 'metegHanpakatArvuyot', columnnamehebrew: 'מוגדר כחשבון ערבויות', display: '1', ordernumber: '5', removable: 'false',columnformatter:'radiobutton',  style:'text-align: center;'},   //id:'misparCheshbon',                                       
                                          {columnnameenglish: 'metegHanpakatArvuyotRemove', columnnamehebrew: ' ', display: '1', ordernumber: '6', removable: 'false',columnformatter:'onHoverDelete', associatedcolumnname: 'metegHanpakatArvuyot'},];
  cheshbonArtut: string = "445783";

  cheshbonFormGroup: FormGroup;
  errorMsg: string = "";
  isHover: boolean = false;
  selectedRows:number[] = [];


  constructor(private http: HttpClient, private shofarServices: ShofarServices, public dialog: MatDialog, public cheshbonotService: CheshbonotService, private store$: Store<State>) {

  }

  ngOnInit(): void {
    this.cheshbonotService.init(this);
   // this.displayedColumns = this.getDisplayedColumnsList();
    this.getCheshbonotProject();
  }

  getCheshbonotTableObservable(): Observable<CheshbonLeProject[]> {
    return new Observable((observer) => {
      this.shofarServices.getCheshbonotProject(this.misparProyectSagur).subscribe(resp => {
        console.log("---> Data of getCheshbonotProject");
        let generalResponse = resp as GeneralResponse;
        this.cheshbonotList = (generalResponse.data as CheshbonotLeProjectResponse).cheshbonotList;
        observer.next(this.cheshbonotList);
        // this.store$.dispatch(ShofarActions.setLoadingFlag({ loading: false  }));
        //this.cheshbonotListObservable$ = of(this.cheshbonotList);
      });
    });
  }

  getCheshbonotProject(): void{
    this.shofarServices.getCheshbonotProject(this.misparProyectSagur).subscribe(resp => {
      console.log("---> Data of getCheshbonotProject");
      let generalResponse = resp as GeneralResponse;
      this.cheshbonotList = (generalResponse.data as CheshbonotLeProjectResponse).cheshbonotList;

      //this.cheshbonotListObservable$ = of(this.cheshbonotList);
    });

  }


  getDisplayedColumnsList(): ColumnDefinition[]{
    let column: ColumnDefinition = {columnnameenglish: 'misparCheshbon', columnnamehebrew: 'מספר חשבון', display: '1', ordernumber: '1', removable: '0'};
    let displayedColumnsList: ColumnDefinition[] = [column];

   // displayedColumnsList.push(column);

    return displayedColumnsList;
  }


  openHosafatCheshbonPopup(): void{
    const dialogRef = this.dialog.open(HosafatCheshbonComponent, {
      width: '50%',
      height: '90%',
      data: {misparProyectSagur: this.misparProyectSagur, misparBank: this.misparBank},
    });

    dialogRef.afterClosed().subscribe(newProject => {
      this.cheshbonotListObservable$ = this.getCheshbonotTableObservable();
    });
  }



  removeCheshbonot(misparBank: string, misparSnif: string, misparCheshbon: string): void{
    this.errorMsg = "";
    this.shofarServices.removeCheshbon(this.misparProyectSagur, misparBank, misparSnif, misparCheshbon).subscribe(resp => {
      let generalResponse = resp as GeneralResponse;

      if(generalResponse.messages != null && generalResponse.messages.global.errors.length > 0){
        this.errorMsg = generalResponse.messages.global.errors[0].message;
      }else{
        this.cheshbonotListObservable$ = this.getCheshbonotTableObservable();
      }

    });

  }

  hagderKeArvut(misparBank: string, misparSnif: string, misparCheshbon: string): void{
    this.errorMsg = "";
    this.shofarServices.hagderKeArvut(this.misparProyectSagur, misparBank, misparSnif, misparCheshbon).subscribe(resp => {
      let generalResponse = resp as GeneralResponse;

      if(generalResponse.messages != null && generalResponse.messages.global.errors.length > 0){
        this.errorMsg = generalResponse.messages.global.errors[0].message;
      }else{
        this.cheshbonotListObservable$ = this.getCheshbonotTableObservable();
      }

    });

  }

  changeArvut($event): void{
    console.log($event);
  }


  clickInRow($event): void{
    console.log($event);

    let cheshbonToRemove = ($event.item as CheshbonLeProject);
    let misparBank = cheshbonToRemove.misparBank;
    let misparSnif = cheshbonToRemove.misparSnif;
    let misparCheshbon = cheshbonToRemove.misparCheshbon

    if($event.column == 'metegHanpakatArvuyot'){
      this.hagderKeArvut(misparBank, misparSnif, misparCheshbon);
    }else if($event.column == 'metegHanpakatArvuyotRemove'){      
      this.removeCheshbonot(misparBank, misparSnif, misparCheshbon);
    }
   
  }

}


export interface CheshbonotLeProjectResponse{
  cheshbonotList: CheshbonLeProject[];
}

export interface CheshbonLeProject{
  metegCheshbonMovil: string;
  metegHanpakatArvuyot: string;
  misparBank: string;
  misparCheshbon: string;
  misparProyectSagur: string;
  misparShura: string;
  misparSnif: string;
  misparTavla: string;
  shemCheshbon: string;
}

