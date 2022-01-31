
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShofarServices } from '../../services/shofar-services';

const COLUMNS=[{columnnamehebrew:' ',display:'1', columnnameenglish:'selectRow',ordernumber:0,columnformatter:'checkbox'},
{columnnamehebrew:"מס' יחידה", columnformatter:' ', display:'1', columnnameenglish:'misparShura'} ,
{columnnamehebrew:"שמות הרוכשים", columnformatter:' ', display:'1', columnnameenglish:'shemLakoachKolel'} ,
{columnnamehebrew:"זיהוי יחידה", columnformatter:' ', display:'1', columnnameenglish:'shuratMelel180'} ,
{columnnamehebrew:"שווי לפי דוח 0", columnformatter:' ', display:'1', columnnameenglish:'erechShoviDoch0'} ,
{columnnamehebrew:"גוש", columnformatter:' ', display:'1', columnnameenglish:'misparGush'},
{columnnamehebrew:"חלקה/ות", columnformatter:' ', display:'1', columnnameenglish:'metegPakadGushChelka'},
{columnnamehebrew:"תאריך חוזה", columnformatter:'Int2DateFormatter', display:'1', columnnameenglish:'taarich8HaChoze'},
{columnnamehebrew:'סכום חוזה ללא מע"מ', columnformatter:' ', display:'1', columnnameenglish:'schumChoze'} ,
{columnnamehebrew:'סכום חוזה כולל מע"מ', columnformatter:' ', display:'1', columnnameenglish:'schumBeFoal'} ,
{columnnamehebrew:"תשלומים עד כה – כמות", columnformatter:' ', display:'1', columnnameenglish:'misparTashlumim'}  ,
{columnnamehebrew:'תשלומים עד כה – סה"כ', columnformatter:' ', display:'1', columnnameenglish:'schumTashlumim'},
{columnnamehebrew:"ערבויות שהוצאו - כמות", columnformatter:' ', display:'1', columnnameenglish:'misparArvuyot'},
{columnnamehebrew:'ערבויות שהוצאו – סה"כ', columnformatter:' ', display:'1', columnnameenglish:' schumArvuyot'},
{columnnamehebrew:"פנקסי שוברים - הוזמנו", columnformatter:' ', display:'1', columnnameenglish:'kamutPinkasimMuzmenet'},
{columnnamehebrew:"פנקסי שוברים – סטטוס אחרון", columnformatter:' ', display:'1', columnnameenglish:'teurStsHazmanatPnk '},
{columnnamehebrew:"טיפול בערבויות – שינוי סוג", columnformatter:' ', display:'1', columnnameenglish:'statusShinuy'},
{columnnamehebrew:"טיפול בערבויות – ביטול", columnformatter:' ', display:'1', columnnameenglish:'kodStatusBitulArvut'}
]


@Component({
  selector: 'matbea-yechidot',
  templateUrl: './yechidot.component.html',
  styleUrls: ['./yechidot.component.scss'],
})
export class YechidotComponent implements OnInit {

@Input() misparProyectSagur:number;
@Input() misparShalav:number;

  displayedColumns: any[] = [];
  loadingTab
  loadingTable = true;
  selectedRows:number[]=[];
  showActionBar: boolean =false;
  dataSource;
  dataSource$:Observable<any>;

  refreshData(){
  this.dataSource$ = this.shofarServices.getyechidot(this.misparProyectSagur,this.misparShalav);
  }
  constructor(private shofarServices: ShofarServices) {}
  ngOnInit() {
    this.showActionBar=false;
    this.displayedColumns =COLUMNS;
    this.refreshData();
    this.dataSource$.subscribe(data =>{debugger;this.dataSource=data});
  }
  selectedRowsChange(e){
   console.log('new selectedRows',e)
    this.selectedRows=e
    this.showActionBar = e.length>0;
    this.dataSource=this.dataSource?.map((row,i)=>({...row, selectRow:this.selectedRows.includes(i)}))
    
  }
}

