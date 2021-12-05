import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'matbea-icon',
  templateUrl: './matbea-icon.component.html',
  styleUrls: ['./matbea-icon.component.scss']
})
export class MatbeaIconComponent implements OnInit {
  @Input() icon!: string;
  @Input() fontIcon!: string;
  @Input() fontSet!: string;
  @Input() inline!: boolean;
  @Input() svgIcon!: string;
  @Output() click= new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
