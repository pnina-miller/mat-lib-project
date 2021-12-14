import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatbeaComboComponent } from 'libs/matbea-ui-components/src/lib/drag-page/matbea-combo/matbea-combo.component';

const culam = "כולם"

@Component({
  selector: 'combo-status-project',
  templateUrl: './combo-status-project.component.html',
  styleUrls: ['./combo-status-project.component.scss']
})
export class ComboStatusProjectComponent implements OnInit, OnChanges {
  @Input() options: any[] = [];
  @Output() selected = new EventEmitter()
  valueToSelectStatus: { id: number, value: string, style?: string }[]
  @Input() default: boolean;
  defaultInSelector: number;
  @ViewChild(MatbeaComboComponent) form: MatbeaComboComponent;


  constructor() {
  }


  ngOnInit(): void {

  }

  outFromSelectStatus($event) {
    console.log("outFromSelectStatus", $event)
    this.selected.emit($event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("this.options", this.options)
    console.log("changes", changes)
    if (this.options && (changes.options.currentValue != changes.options.previousValue)) {
      this.valueToSelectStatus = this.options.map((v) => {
        let style = ""
        if (v.value == culam) {
          this.defaultInSelector = v.id;
        }
        if (v.value == 'פעיל') {
         style = "color: #7DD24E"
        }

        return { id: v.id, value: v.value, style: style }
      });
    }

  }
  empty() {
    this.form.valueToDefoult = this.defaultInSelector;
  }
}
