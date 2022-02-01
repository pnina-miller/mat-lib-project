
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShofarServices } from '../../services/shofar-services';

const COLUMNS=[{columnnamehebrew:' ',display:'1', columnnameenglish:'selectRow',ordernumber:0,columnformatter:'checkbox'},
{ordernumber:1, columnnamehebrew:"מס' יחידה", columnformatter:' ', display:'1', columnnameenglish:'misparShura'} ,
{ordernumber:2, columnnamehebrew:"שמות הרוכשים", columnformatter:' ', display:'1', columnnameenglish:'shemLakoachKolel'} ,
{ordernumber:3, columnnamehebrew:"זיהוי יחידה", columnformatter:' ', display:'1', columnnameenglish:'shuratMelel180'} ,
{ordernumber:4, columnnamehebrew:"שווי לפי דוח 0", columnformatter:' ', display:'1', columnnameenglish:'erechShoviDoch0'} ,
{ordernumber:5, columnnamehebrew:"גוש", columnformatter:' ', display:'1', columnnameenglish:'misparGush'},
{ordernumber:6, columnnamehebrew:"חלקה/ות", columnformatter:' ', display:'1', columnnameenglish:'metegPakadGushChelka'},
{ordernumber:7, columnnamehebrew:"תאריך חוזה", columnformatter:'Int2DateFormatter', display:'1', columnnameenglish:'taarich8HaChoze'},
{ordernumber:8, columnnamehebrew:'סכום חוזה ללא מע"מ', columnformatter:' ', display:'1', columnnameenglish:'schumChoze'} ,
{ordernumber:9, columnnamehebrew:'סכום חוזה כולל מע"מ', columnformatter:' ', display:'1', columnnameenglish:'schumBeFoal'} ,
{ordernumber:10, columnnamehebrew:"תשלומים עד כה", columnformatter:' ', display:'1', columnnameenglish:'Tashlumim', colspan:2, subColumns:[
  {ordernumber:10.1, columnnamehebrew:"כמות", columnformatter:' ', display:'1', columnnameenglish:'misparTashlumim'}  ,
  {ordernumber:10.2, columnnamehebrew:'סה"כ', columnformatter:' ', display:'1', columnnameenglish:'schumTashlumim'},
]} ,
{ordernumber:12, columnnamehebrew:"ערבויות שהוצאו", columnformatter:' ', display:'1', columnnameenglish:'arvuyot',colspan:2, subColumns:[
  {columnnamehebrew:'כמות',display:'1', columnnameenglish:'misparArvuyot',ordernumber:12.1},
  {columnnamehebrew:'סה"כ ',display:'1', columnnameenglish:'schumArvuyot',ordernumber:12.2} 
]},
{ordernumber:14, columnnamehebrew:"פנקסי שוברים", columnformatter:' ', display:'1', columnnameenglish:'pinkasim',colspan:2, subColumns:[
  {ordernumber:14.1, columnnamehebrew:"הוזמנו", columnformatter:' ', display:'1', columnnameenglish:'kamutPinkasimMuzmenet'},
  {ordernumber:14.2, columnnamehebrew:"סטטוס אחרון", columnformatter:' ', display:'1', columnnameenglish:'teurStsHazmanatPnk '},
]},
{ordernumber:16, columnnamehebrew:"טיפול בערבויות", columnformatter:' ', display:'1', columnnameenglish:'arvut', colspan:2, subColumns:[
{ordernumber:16.1, columnnamehebrew:"שינוי סוג", columnformatter:' ', display:'1', columnnameenglish:'statusShinuy'},
{ordernumber:16.2, columnnamehebrew:"ביטול", columnformatter:'YESNO', display:'1', columnnameenglish:'kodStatusBitulArvut'}
]},
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
    this.dataSource$.subscribe(data =>{this.dataSource=data});
  }
  selectedRowsChange(e){
   console.log('new selectedRows',e)
    this.selectedRows=e
    this.showActionBar = e.length>0;
    this.dataSource=this.dataSource?.map((row,i)=>({...row, selectRow:this.selectedRows.includes(i)}))
    
  }
}

