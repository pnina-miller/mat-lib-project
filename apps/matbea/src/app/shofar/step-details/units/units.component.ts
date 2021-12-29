
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { ShofarServices } from '../../services/shofar-services';

const COLUMNS=[{columnnamehebrew:' ',display:'1', columnnameenglish:' ',ordernumber:0,columnformatter:'checkbox'},
{columnnamehebrew:"מס' יחידה", columnformatter:' ', display:'1', columnnameenglish:'misparShura'} ,
{columnnamehebrew:"שמות הרוכשים", columnformatter:' ', display:'1', columnnameenglish:'shemLakoachKolel'} ,
{columnnamehebrew:"זיהוי יחידה", columnformatter:' ', display:'1', columnnameenglish:'shuratMelel180'} ,
{columnnamehebrew:"שווי לפי דוח 0", columnformatter:' ', display:'1', columnnameenglish:'erechShoviDoch0'} ,
{columnnamehebrew:"גוש", columnformatter:' ', display:'1', columnnameenglish:'misparGush'},
{columnnamehebrew:"חלקה/ות", columnformatter:' ', display:'1', columnnameenglish:'metegPakadGushChelka'},
{columnnamehebrew:"תאריך חוזה", columnformatter:' ', display:'1', columnnameenglish:'taarich8HaChoze'},
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
  selector: 'matbea-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss'],
})
export class UnitsComponent implements OnInit {
  // dataSource:MatTableDataSource<any>=new MatTableDataSource<any>();

@Input() misparProyectSagur:number;
@Input() misparShalav:number;

  displayedColumns: any[] = [];
  loadingTable = true;

  dataSource = Observable.create(observer => {
    this.shofarServices.getyechidot(this.misparProyectSagur,this.misparShalav).subscribe((res:any) => {
      this.loadingTable=false;
      observer.next(res.data.avctl071List.fullList)
    })
  })

  constructor(private shofarServices: ShofarServices) {}
  ngOnInit() {
      this.displayedColumns =COLUMNS;
    //TODO: check how to do this
    // this.shofarServices.getyechidot(2).subscribe((data: any) => {
    //   this.unitsList = data.data.avctl071List.fullList;
    //   this.dataSource=new MatTableDataSource(this.unitsList);
    //   this.unitsList=this.unitsList.map(u=>({...u,check:false}))
     
    // });
  }
}
