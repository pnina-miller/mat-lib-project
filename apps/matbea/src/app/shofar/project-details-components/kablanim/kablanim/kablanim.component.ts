import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShofarServices } from '../../../services/shofar-services';
import { GeneralResponse } from '../../../../../../../../libs/matbea-shared-components/src/lib/beans/general-response';

export interface KablanimRowType {
  misparZihuyLakoach: string;
  shemLakoachKolel: string;
}
export interface kablanimListType {
  kablanimList: KablanimRowType[];
}

@Component({
  selector: 'matbea-kablanim',
  templateUrl: './kablanim.component.html',
  styleUrls: ['./kablanim.component.scss']
})
export class KablanimComponent implements OnInit {
  @Input() projectId:any;
  displayedColumns: string[] = ['name', 'zehut'];
  infoGenResp: GeneralResponse;
  isNatunimExt: boolean;
  kablanimList: kablanimListType;
  isLoaded = false;
  message = "";
  kvztRehishaMsg = "הפרויקט הוא מסוג קבוצת רכישה ולכן ללא קבלנים";
  sugYeshut: number = 0;


  constructor(private http: HttpClient, private shofarServices : ShofarServices) { }

  ngOnInit(): void {
    this.shofarServices.getReshimatKablanim(this.projectId).subscribe(resp => {      

      this.infoGenResp = resp as GeneralResponse;
      this.isNatunimExt = (this.infoGenResp.messages == undefined || this.infoGenResp.messages.global.errors.length == 0)? true: false;
      this.sugYeshut = this.infoGenResp.data["sugYeshutProyect"];
      this.message = (this.isNatunimExt)? "" : this.infoGenResp.messages.global.errors[0].message;  
      this.kablanimList = this.infoGenResp.data["kablanimList"] as kablanimListType;
      this.isLoaded = true;
    },
    (error) => { 
      console.error('error caught in component' + error)
    })
  }

}
