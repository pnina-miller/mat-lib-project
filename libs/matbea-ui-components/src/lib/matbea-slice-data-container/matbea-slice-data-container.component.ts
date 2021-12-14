import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'matbea-slice-data',
  templateUrl: './matbea-slice-data-container.component.html',
  styleUrls: ['./matbea-slice-data-container.component.scss']
})
export class MatbeaSliceDataContainerComponent implements OnInit {
  @Input() titel: string ="טאיטאל";
  @Input() footerContent:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

}
