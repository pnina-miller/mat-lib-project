import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GeneralResponse } from '../../beans/general-response';
import { GeneralComboEntry } from '../matbea-hierarchy-general-combo/general-combo-interface';


@Component({
  selector: 'pdesks-matbea-makal-combo',
  templateUrl: './matbea-makal-combo.component.html',
  styleUrls: ['./matbea-makal-combo.component.scss']
})
export class MatbeaMakalComboComponent implements OnInit {

  makalCombo: GeneralComboEntry[];

  
  @Input('kodSector') kodSector: string = "";    
  @Input('misparMakal') misparMakal: string = "";
  @Input('isComboDisabled') isComboDisabled: string;
  @Output() makalChanged = new EventEmitter<String>();



  // constructor(private http: HttpClient,private route: ActivatedRoute) { }
  constructor() { }

  ngOnInit(): void {
    
  }


  public makalComboChanged($event){
    console.log($event);
    this.misparMakal = $event;
    this.makalChanged.emit(this.misparMakal);
  }


}
