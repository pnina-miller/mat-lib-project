import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  TemplateRef
} from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
export const svgIcons = [
  "matbea-columPicker",
  "matbea-download",
  "matbea-filter",
  "matbea-print",
  "matbea-search",
  "matbea-sort",
  "matbea-back"
]


type PositionTooltip = 'above' | 'below' | 'left' | 'right' | 'before' | 'after' ;


@Component({
  selector: 'matbea-button',
  templateUrl: './matbea-button.component.html',
  styleUrls: ['./matbea-button.component.scss']
})
export class MatbeaButtonComponent implements OnInit, OnChanges {

  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<any>();
  @Input() positionTooltip: PositionTooltip = 'above';
  @Input() tooltip: string = '';
  @Input() size: string;
  @Input() type: 'mat-stroked' | 'mat-raised' | 'mat-def' | 'mat-flat' | 'matbea-raised' | 'def' | 'matbea-stroked'|'matbea-regular' = 'def';
  @Input() style = "";
  @Input() color: null | "primary" | "accent" | "warn";
  @Input() icon: string;
  @ViewChild('noSvgIcon', { static: false}) noSvgIcon:TemplateRef<any>;
  @ViewChild('svgIcon', { static: false}) svgIcon:TemplateRef<any>;
  svg:boolean;
  private element: ElementRef;


  constructor(elementRef: ElementRef, private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    this.element = elementRef;
    this.matIconRegistry.addSvgIcon("matbea-columPicker", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/columPicker.svg"));
    this.matIconRegistry.addSvgIcon("matbea-download", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/download.svg"));
    this.matIconRegistry.addSvgIcon("matbea-filter", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/filter.svg"));
    this.matIconRegistry.addSvgIcon("matbea-print", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/print.svg"));
    this.matIconRegistry.addSvgIcon("matbea-search", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/search.svg"));
    this.matIconRegistry.addSvgIcon("matbea-sort", this.domSanitizer.bypassSecurityTrustResourceUrl("./assets/sort.svg"));

  }

  ngAfterViewInit(): void {
    // if (svgIcons.includes(this.icon)&&this.icon) {
    //   this.svg =this.svgIcon;
    // } else if(this.icon){
    //   this.svg =this.noSvgIcon;
    // } else{
    //   this.svg=null;
    // }
  }

  ngOnInit(): void {
    if (this.size == 'l') {
      this.style = "height: 3em;min-width: 9em; "
    }
    if (svgIcons.includes(this.icon)&&this.icon) {
      this.svg =true;
    } else if(this.icon){
      this.svg =false;
    } else{
      this.svg=null;
    }

  }

  ngOnChanges(): void {

    if (this.type.startsWith('mat-')) {
      this.element.nativeElement.children[0].classList.remove("mat-button")
      this.element.nativeElement.children[0].classList.add(`${this.type}-button`)
    } else if (this.type.startsWith('matbea-')) {
      console.log("start with matbea")
      this.element.nativeElement.children[0].classList.remove("mat-button")
      this.element.nativeElement.children[0].classList.add(`${this.type}-button`)
    } else {
      console.log("This is Def")
    }

  }
}
