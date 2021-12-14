import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pdesks-matbea-hierarchy-combo',
  templateUrl: './matbea-hierarchy-combo.component.html',
  styleUrls: ['./matbea-hierarchy-combo.component.scss']
})
export class MatbeaHierarchyComboComponent implements OnInit {
  @Input('misparChativa') misparChativa: string = "3";
  @Input('isChativaDisabled') isChativaDisabled: string = "false";
  @Input('isChativaVisible') isChativaVisible: string = "false";
  @Output() chativaValuefChanged = new EventEmitter<String>();

  @Input('misparAgaf') misparAgaf: string;
  @Input('isAgafDisabled') isAgafDisabled: string = "false";
  @Output() agaValuefChanged = new EventEmitter<String>();

  @Input('kodSector') kodSector: string;
  @Input('isSectorDisabled') isSectorDisabled: string = "false";
  @Output() sectorValuefChanged = new EventEmitter<String>();
  
  @Input('misparMakal') misparMakal: string;
  @Input('isMakalDisabled') isMakalDisabled: string = "false";
  @Output() makalValuefChanged = new EventEmitter<String>();

  @Input('hierarchyLayout') hierarchyLayout: string = "vertical";
  layoutClass: string = "";

  constructor() { }

  ngOnInit(): void {
    console.log('misparChativa parent = ' + this.misparChativa);
    if(this.hierarchyLayout.toLowerCase() == "vertical"){
      this.layoutClass = "";
    }else if(this.hierarchyLayout.toLowerCase() == "horizontal"){
      this.layoutClass = "horizontalLayout ";
    }
  }


  public agafChanged($event){
    console.log($event);
    this.misparAgaf = $event;
    this.agaValuefChanged.emit(this.misparAgaf);
  }


  public sectorChanged($event){
    console.log($event);
    this.kodSector = $event;
    this.sectorValuefChanged.emit(this.kodSector);
  }

  public chativaChanged($event){
    console.log($event);
    this.misparChativa = $event;
    this.chativaValuefChanged.emit(this.misparChativa);
  }

  public makalChanged($event){
    console.log($event);
    this.misparMakal = $event;
    this.makalValuefChanged.emit(this.misparMakal);
  }

}
