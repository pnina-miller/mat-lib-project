import { Component, OnInit, Input, EventEmitter, SimpleChanges, Output } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatbeaUtils } from 'apps/matbea/src/app/shofar/utils/matbea-utils-components';
import { GeneralResponse } from '../../beans/general-response';


@Component({
  selector: 'pdesks-matbea-sector-combo',
  templateUrl: './matbea-sector-combo.component.html',
  styleUrls: ['./matbea-sector-combo.component.scss']
})
export class MatbeaSectorComboComponent implements OnInit {
 
  @Input('misparAgaf') misparAgaf: string = "22";  
  @Output() sectorChanged = new EventEmitter<String>();
  
  @Input('kodSector') kodSector: string = "03";
  @Input('isComboDisabled') isComboDisabled: string;


  
  

  constructor() { }

  ngOnInit(): void {
    
  }

  public sectorComboChanged($event){
    console.log($event);
    this.kodSector = $event;
    this.sectorChanged.emit(this.kodSector);
  }

}
