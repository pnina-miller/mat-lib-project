import {Component, EventEmitter, Input, OnInit, Output, OnChanges} from '@angular/core';
import {MatButtonToggleAppearance, MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'matbea-button-toggle',
  templateUrl: './matbea-button-toggle.component.html',
  styleUrls: ['./matbea-button-toggle.component.scss']
})
export class MatbeaButtonToggleComponent implements OnInit, OnChanges {
  @Input() disabled: boolean;
  @Input() name: string;
  @Output('valueChange') valueChange = new EventEmitter();
  @Output('valueChangeInToggle') valueChangeInToggle = new EventEmitter();
  @Input() value: any;
  @Input() vertical: boolean;
  @Input() multiple: boolean = false;
  @Input() appearance: MatButtonToggleAppearance;
  @Input() checked: any;
  toggles: any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('this ', this);
  }

  ngOnChanges(change) {
      this.value.map(tog => {
        if (tog.value == this.checked) {
          tog.checked = true
        }else if(!this.multiple) {
          tog.checked = false
        }
        return tog;
      })
    

  }
}
