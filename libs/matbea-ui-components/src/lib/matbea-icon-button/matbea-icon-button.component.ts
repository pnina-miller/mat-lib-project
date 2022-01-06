import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, TemplateRef, ViewChild, AfterViewInit} from '@angular/core';
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";


export const svgIcons = [
  "matbea-columPicker",
  "matbea-download",
  "matbea-filter",
  "matbea-print",
  "matbea-search",
  "matbea-sort",
  "matbea-back"
]
@Component({
  selector: 'matbea-icon-button',
  templateUrl: './matbea-icon-button.component.html',
  styleUrls: ['./matbea-icon-button.component.scss']
})
export class MatbeaIconButtonComponent implements OnInit,OnChanges {
  @Input() icon: string = 'home';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<any>();
  @Input() positionTooltip: 'above' | 'below' | 'left' | 'right' | 'before' | 'after' = 'above';
  @Input() tooltip: string = '';
  @Input() color: null | "primary" | "accent" | "warn";
  svg:string;
  @Input() tabIndex: any;

  constructor( private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("matbea-columPicker", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/columPicker.svg"));
    this.matIconRegistry.addSvgIcon("matbea-download", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/download.svg"));
    this.matIconRegistry.addSvgIcon("matbea-filter", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/filter.svg"));
    this.matIconRegistry.addSvgIcon("matbea-print", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/print.svg"));
    this.matIconRegistry.addSvgIcon("matbea-search", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/search.svg"));
    this.matIconRegistry.addSvgIcon("matbea-sort", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/sort.svg"));
  this.matIconRegistry.addSvgIcon("matbea-calendar", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/calendar.svg"));
  this.matIconRegistry.addSvgIcon("matbea-back", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/back.svg"));
  }

  ngOnInit(): void {
    // console.log('', this)
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (svgIcons.includes(this.icon)&&this.icon) {
      this.svg ="svg";
    } else if(this.icon){
      this.svg ="icon";
    } else{
      this.svg=null;
    }
  }


}
