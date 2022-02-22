import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { object } from '@storybook/addon-knobs';
import { ColumnDefinition } from 'libs/matbea-ui-components/src/lib/models/column-definition.model';
import { ShofarServices } from '../../services/shofar-services';

@Component({
  selector: 'matbea-tipul-bearvuyot',
  templateUrl: './tipul-bearvuyot.component.html',
  styleUrls: ['./tipul-bearvuyot.component.scss'],
})
export class TipulBearvuyotComponent implements OnInit {

  titles=['קבלת פרוטוקל מסירה' ,'קבלת מסמכי רישום זכויות' ,'קבלת פרוטוקול מסירה ורישום זכויות'];
  displayedColumns: ColumnDefinition[] = COLUMNS;
  approveOptions = APPROVED_OPTIONS;

  showTable = true;
  selectedRows = [];
  dataSource$: any;
  misparProyectSagur: number;
  misparShalav: number;
  showApproval: boolean;
  showActions: boolean;
  actionType:number;
  taarichProtokolControl = new FormControl();
  taarichBuzuaControl = new FormControl();
approved=[]

  constructor(private shofarServices: ShofarServices, @Inject(MAT_DIALOG_DATA) public data: TipulBearvuyotInputDataType) {
    this.misparProyectSagur = data.misparProyectSagur;
    this.misparShalav = data.misparShalav;
    this.selectedRows = data.selectedRows;
    this.actionType=data.actionType;
  }

  ngOnInit(): void {
    this.dataSource$ = this.shofarServices.getyechidot(this.misparProyectSagur, this.misparShalav);
  }

  checked(value, target) {
    if(value){
      this.approved.push(target);
    } else {
      this.approved=this.approved.filter(el=>el!==target);
    }
    if(this.approved.length===3){
        this.showActions=true;
    } else {
      this.showActions=false;
    }
  }

  selectedRowsChange(event:number[]) {
    if(event.length === this.selectedRows.length) {
      this.showApproval=true;
    }
  }
}

export interface TipulBearvuyotInputDataType {
  selectedRows: number[];
  misparProyectSagur: number;
  misparShalav: number;
  actionType:0|1|2;
}


const COLUMNS = [
  {
    columnnamehebrew: ' ',
    display: '1',
    columnnameenglish: 'selectRow',
    ordernumber: '0',
    columnformatter: 'checkbox',
    removable: 'false',
    notSortable: true,
    style: 'padding-right: 7px',
  },
  {
    ordernumber: '1',
    columnnamehebrew: "מס' יחידה",
    columnformatter: ' ',
    display: '1',
    columnnameenglish: 'misparShura',
    removable: 'false',
  },
  {
    ordernumber: '2',
    columnnamehebrew: 'שמות הרוכשים',
    columnformatter: ' ',
    display: '1',
    columnnameenglish: 'shemLakoachKolel',
    removable: 'false',
  },
  {
    ordernumber: '3',
    columnnamehebrew: 'זיהוי יחידה',
    columnformatter: ' ',
    display: '1',
    columnnameenglish: 'teurYechidaMeforat',
    removable: 'false',
  },
  {
    ordernumber: '9',
    columnnamehebrew: 'סכום חוזה כולל מע"מ',
    columnformatter: ' ',
    display: '1',
    columnnameenglish: 'schumBeFoal',
    removable: 'false',
  },
  {
    ordernumber: '10',
    columnnamehebrew: 'תשלומים עד כה',
    columnformatter: ' ',
    display: '1',
    columnnameenglish: 'Tashlumim',
    removable: 'false',
    colspan: 2,
    subColumns: [
      {
        ordernumber: '10.1',
        columnnamehebrew: 'כמות',
        columnformatter: ' ',
        display: '1',
        columnnameenglish: 'misparTashlumim',
      },
      {
        ordernumber: '10.2',
        columnnamehebrew: 'סה"כ',
        columnformatter: ' ',
        display: '1',
        columnnameenglish: 'schumTashlumim',
      },
    ],
  },
  {
    ordernumber: '12',
    columnnamehebrew: 'ערבויות שהוצאו',
    columnformatter: ' ',
    display: '1',
    columnnameenglish: 'arvuyot',
    removable: 'false',
    colspan: 2,
    subColumns: [
      {
        columnnamehebrew: 'כמות',
        display: '1',
        columnnameenglish: 'misparArvuyot',
        ordernumber: '12.1',
      },
      {
        columnnamehebrew: 'סה"כ ',
        display: '1',
        columnnameenglish: 'schumArvuyot',
        ordernumber: '12.2',
      },
    ],
  },
  {
    ordernumber: '13',
    columnnamehebrew: 'שולמה מלוא התמורה',
    columnformatter: 'icon',
    display: '1',
    columnnameenglish: 'shulam??',
    removable: 'false',
    object:{ icon:'done' }
  },
  {
    ordernumber: '14',
    columnnamehebrew: 'סכום ערבויות תקין',
    columnformatter: 'icon',
    display: '1',
    columnnameenglish: 'schumArvuyot??',
    removable: 'false',
    object:{ icon:'close' }
  }
];
const APPROVED_OPTIONS = [
  {
    id: 0,
    lable:
      'התקבל אישור מפקח לכך שבנייתה של הדירה הסתיימה (התקבל טופס 4 / אישור אחר על השלמת הבנייה)',
      types:[0,1,2]
  },
  { id: 1, lable: 'שולמה מלוא התמורה ע"י הרוכשים לחשבון הסגור של הפרויקט',  types:[0,1,2] },

  {
    id: 2,
    lable:
      'התקבל אישור על קבלת החזקה בדירה (פרוטוקול מסירה), חתום ע"י רוכש הדירה (או לחילופין אישור על השלמת הבנייה לפי תקנות המכר)',
      types:[0,1,2]
  },
  {
    id:3, 
    lable: 'התקבלו מסמכי רישום זכויות בדירה (נוסח רישום מקרקעין לפיו נרשמה לטובת הרוכש הערת אזהרה או נסח רישום לפיו נרשמה העברת בעלות בדירה על שם הרוכש)',
    types:[2]
  }
];
/**


התקבלו מסמכי רישום זכויות בדירה (נוסח רישום מקרקעין לפיו נרשמה לטובת הרוכש הערת אזהרה או נסח רישום לפיו נרשמה העברת בעלות בדירה על שם הרוכש)
 */