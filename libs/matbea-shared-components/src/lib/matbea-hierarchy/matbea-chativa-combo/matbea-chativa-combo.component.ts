import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { GeneralComboEntry } from '../matbea-hierarchy-general-combo/general-combo-interface';
import { MatbeaUtils } from 'apps/matbea/src/app/shofar/utils/matbea-utils-components';
import { GeneralResponse } from '../../beans/general-response';




@Component({
  selector: 'pdesks-matbea-chativa-combo',
  templateUrl: './matbea-chativa-combo.component.html',
  styleUrls: ['./matbea-chativa-combo.component.scss']
})
export class MatbeaChativaComboComponent implements OnInit {
  chativaCombo: GeneralComboEntry[];
  isReadOnly: boolean;


  @Input('misparChativaInputInit') misparChativaInputInit: string = "03";
  @Input('misparChativaInput') misparChativa: string = "03";
  @Input('isComboDisabled') isComboDisabled: string;
  @Input('isChativaVisible') isVisible: string = "false";
  @Output() chativaChanged = new EventEmitter<String>();

  
  


  // constructor(private http: HttpClient,private route: ActivatedRoute) { }
  constructor() { }

  ngOnInit(): void {
    console.log(">>> misparChativa = " + this.misparChativa);
    console.log(">>> isVisible = " + this.isVisible);
  }


  

  public chativaComboChanged($event): void{
    this.misparChativa = $event;
    this.chativaChanged.emit(this.misparChativa);
  }



}
