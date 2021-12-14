import {Component, EventEmitter, OnInit, Input, Output, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'matbea-picker-element',
  templateUrl: './matbea-picker-element.component.html',
  styleUrls: ['./matbea-picker-element.component.scss']
})
export class MatbeaPickerElementComponent implements OnInit, OnChanges {
  @Output() doClick = new EventEmitter<any>();
  @Input() type: 'add' | 'remove' | 'lock' = 'add';
  @Input() disabled: boolean = false;
  @Input() value: any;

  icons = [
    'more_vert',
    'add_circle',
    'lock',
    'remove_circle'
  ]
  suffixIcon: string = this.icons[0];
  prefixIcom: string = this.icons[1];


  constructor() {}

  ngOnInit(): void {
  }

  onClick() {
    this.doClick.emit();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.disabled) {
      if (this.type == 'remove') {
        this.prefixIcom = this.icons[3];
      } else if (this.type == 'lock') {
        this.prefixIcom = this.icons[2];
      }
    } else {
      this.prefixIcom = this.icons[2];
    }
  }

}
