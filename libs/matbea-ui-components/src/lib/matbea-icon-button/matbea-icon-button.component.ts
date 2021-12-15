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
  "home",
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
  @Input() color!: null | "primary" | "accent" | "warn";
  @ViewChild('noSvgIcon', { static: false}) noSvgIcon!:TemplateRef<any>;
  @ViewChild('svgIcon', { static: false}) svgIcon!:TemplateRef<any>;
  svg!:string | null;
  @Input() tabIndex: any;

  constructor( private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("columPicker", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/columPicker.svg"));
    this.matIconRegistry.addSvgIcon("download", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/download.svg"));
    this.matIconRegistry.addSvgIcon("filter", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/filter.svg"));
    this.matIconRegistry.addSvgIcon("print", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/print.svg"));
    this.matIconRegistry.addSvgIcon("search", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/search.svg"));
    this.matIconRegistry.addSvgIcon("home", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/search.svg"));
    this.matIconRegistry.addSvgIcon("matbea-back", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/search.svg"));
    this.matIconRegistry.addSvgIcon("sort", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/icons/sort.svg"));
  }

  ngOnInit(): void {
    // console.log('', this,s)
  }

  ngOnChanges(changes: SimpleChanges): void {
debugger
    if (svgIcons.includes(this.icon)&&this.icon) {
      this.svg ="svgIcon";
    } else if(this.icon){
      this.svg ="noSvgIcon";
    } else{
      this.svg=null;
    }
  }

}
