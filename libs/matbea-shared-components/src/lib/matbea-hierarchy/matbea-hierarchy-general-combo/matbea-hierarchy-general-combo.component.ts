import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { GeneralComboEntry, HierarchyCombo } from '../matbea-hierarchy-general-combo/general-combo-interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatbeaUtils } from 'apps/matbea/src/app/shofar/utils/matbea-utils-components';
import { GeneralResponse } from '../../beans/general-response';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'matbea-matbea-hierarchy-general-combo',
  templateUrl: './matbea-hierarchy-general-combo.component.html',
  styleUrls: ['./matbea-hierarchy-general-combo.component.scss'],
  
})
export class MatbeaHierarchyGeneralComboComponent implements OnInit {

  hierarchyCombo: GeneralComboEntry[];

  @Input('hierarchyComboIninitValue') hierarchyComboIninitValue: string;
  @Input('hierarchyCombInputKod') hierarchyCombInputKod: string;
  @Input('hierarchyComboKod') hierarchyComboKod: string;
  @Input('hierarchyService') hierarchyService: string;
  @Input('hierarchyLabel') hierarchyLabel: string;
  @Input('isComboDisabled') isComboDisabled: string;
  @Output() hierarchyChanged = new EventEmitter<String>();


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.hierarchyLabel + "  " + this.hierarchyComboKod)
    if(this.hierarchyComboIninitValue != undefined && this.hierarchyComboIninitValue !=null){
      //this.hierarchyComboKod = this.hierarchyComboIninitValue;
    }
    this.getHierarchyListFromService();
  }

  //@Input()
  //set hierarchyComboKod(val: any) {
  //  console.log('currently selected item=', val);
  //}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.hierarchyLabel);
    this.getHierarchyListFromService();
    if(this.hierarchyComboIninitValue != undefined && this.hierarchyComboIninitValue !=null){
      this.hierarchyComboKod = this.hierarchyComboIninitValue;
      this.hierarchyComboIninitValue = null;
    }else{
      if(changes.hierarchyCombInputKod != undefined && changes.hierarchyCombInputKod.currentValue != undefined){
        setTimeout(() => {
          this.hierarchyComboChanged("");
          this.hierarchyComboKod = "";
        });        
       // this.hierarchyComboChanged(changes.hierarchyCombInputKod.currentValue);
      }else{
        this.hierarchyComboChanged("");
      }
    }
// this.hierarchyComboKod = "";

  }


  private getHierarchyListFromService(): void{
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.request("get", MatbeaUtils.getServiceUrl(this.hierarchyService), { headers: headers, params: {hierarchyComboName: this.hierarchyCombInputKod} })
    .subscribe(resp => {
      let generalResponse = resp as GeneralResponse;
      this.hierarchyCombo = (generalResponse.data as HierarchyCombo).combo as GeneralComboEntry[];
      console.log(this.hierarchyLabel + " >>>> " + "hierarchyComboKod = " + this.hierarchyComboKod + "    hierarchyComboIninitValue = " + this.hierarchyComboIninitValue)
    });
  }


  public hierarchyComboChanged($event): void{
    if($event.id == undefined){
      this.hierarchyChanged.emit('');
    }else{
      this.hierarchyChanged.emit( $event.id);
    }
  }

}
