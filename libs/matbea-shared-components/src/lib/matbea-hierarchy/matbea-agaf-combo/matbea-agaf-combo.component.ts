import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { GeneralResponse } from '../../beans/general-response';
import { GeneralComboEntry } from '../matbea-hierarchy-general-combo/general-combo-interface';




@Component({
  selector: 'pdesks-matbea-agaf-combo',
  templateUrl: './matbea-agaf-combo.component.html',
  styleUrls: ['./matbea-agaf-combo.component.scss']
})


export class MatbeaAgafComboComponent implements OnInit {
  agafCombo: GeneralComboEntry[];

  @Input('misparChativa') misparChativa: string = "03";
  @Output() agafChanged = new EventEmitter<String>();

  @Input('misparAgaf') misparAgaf: string = "03";
  @Input('isComboDisabled') isComboDisabled: string;

  
  


  // constructor(private http: HttpClient,private route: ActivatedRoute) { }
  constructor() { }

  ngOnInit(): void {
   
  }


  

  public agafComboChanged($event): void{
    this.misparAgaf = $event;
    this.agafChanged.emit(this.misparAgaf);
  }

}
