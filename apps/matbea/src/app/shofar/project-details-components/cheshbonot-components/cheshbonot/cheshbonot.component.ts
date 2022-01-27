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

@Component({
  selector: 'matbea-cheshbonot',
  templateUrl: './cheshbonot.component.html',
  styleUrls: ['./cheshbonot.component.scss']
})




export class CheshbonotComponent implements OnInit {
  @Input('misparProyectSagur') misparProyectSagur: string;
  @Input('misparBank') misparBank: string;
  cheshbonotList: CheshbonLeProject[] = [];
  cheshbonotListObservable$: Observable<CheshbonLeProject[]> = null;
  // displayedColumns: string[] = ['misparBank', 'misparSnif', 'misparCheshbon', 'shemCheshbon', 'metegHanpakatArvuyot', 'metegHanpakatArvuyotLink', 'metegHanpakatArvuyotRemove'];
  cheshbonArtut: string = "445783";
 
  cheshbonFormGroup: FormGroup;
  errorMsg: string = "";
  isHover: boolean =false;

  displayedColumns:ColumnDefinition[] = [{ columnnameenglish: 'misparBank', columnnamehebrew: 'מספר בנק', columnformatter: 'string', display: '1', ordernumber:'0', removable:'false' },
  { columnnameenglish: 'misparSnif', columnnamehebrew: 'מספר סניף', columnformatter: 'string', display: '1', ordernumber:'1', removable:'false'  },
  { columnnameenglish: 'misparCheshbon', columnnamehebrew: "מספר חשבון", columnformatter: 'string', display: '1', ordernumber:'2', removable:'false'  },
  { columnnameenglish: 'shemCheshbon', columnnamehebrew: 'מספר חשבון', columnformatter: 'string', display: '1', ordernumber:'3', removable:'false'  },
  { columnnameenglish: 'metegHanpakatArvuyot', columnnamehebrew: 'הנפקת ערבויות', columnformatter: 'YESNO', display: '1', ordernumber:'4', removable:'false'  },
  { columnnameenglish: 'checked', columnnamehebrew: 'צק בוקס', columnformatter: 'radio', display: '1', ordernumber:'5', removable:'false'  }]
  constructor(private http: HttpClient, private shofarServices: ShofarServices, public dialog: MatDialog, public cheshbonotService: CheshbonotService) { 

  }

  ngOnInit(): void {
    this.cheshbonotService.init(this);
   // this.displayedColumns = this.getDisplayedColumnsList();
    this.getCheshbonotProject();
  }

  getCheshbonotProject(): void{
    this.cheshbonotListObservable$=this.shofarServices.getCheshbonotProject(this.misparProyectSagur);
   /* this.shofarServices.getCheshbonotProject(this.misparProyectSagur).subscribe(resp => {      
      console.log("---> Data of getCheshbonotProject"); 
      let generalResponse = resp as GeneralResponse;
      
      this.cheshbonotList = (generalResponse.data as CheshbonotLeProjectResponse).cheshbonotList;
      this.cheshbonotListObservable$ = of(this.cheshbonotList);
    });     */
    
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
      height: '75%', 
      data: {misparProyectSagur: this.misparProyectSagur, misparBank: this.misparBank},    
    });

    dialogRef.afterClosed().subscribe(newProject => {
      this.getCheshbonotProject();     
    }); 
  }



  removeCheshbonot(misparBank: string, misparSnif: string, misparCheshbon: string): void{
    this.errorMsg = "";
    this.shofarServices.removeCheshbon(this.misparProyectSagur, misparBank, misparSnif, misparCheshbon).subscribe(resp => {      
      let generalResponse = resp as GeneralResponse;
     
      if(generalResponse.messages != null && generalResponse.messages.global.errors.length > 0){
        this.errorMsg = generalResponse.messages.global.errors[0].message;       
      }else{
        this.getCheshbonotProject();
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
        this.getCheshbonotProject();
      }
      
    });     
    
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

