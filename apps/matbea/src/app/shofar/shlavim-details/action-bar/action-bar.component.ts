import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatbeaMenuItem } from 'libs/matbea-ui-components/src/lib/matbea-menu/matbea-menu.component';
import { Observable } from 'rxjs';
import { ShlavimService } from '../../project-details-components/shlavim-components/shlavim/shlavim.service';
import { HazmanatPinkasimComponent } from '../hazmanat-pinkasim/hazmanat-pinkasim.component';

@Component({
  selector: 'matbea-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.scss'],
})
export class ActionBarComponent implements OnInit, OnChanges {
  @Input() arrayLength: number;
  @Input() selectedRows!: number[];
  @Output() selectedRowsChange = new EventEmitter<number[]>();
  @Input() selectedLength = 0;

  @Output() openHazmanatPinkasim = new EventEmitter<any>();
  rangeFrom: number = 0;
  fromOptions = [];
  rangeTo: number = 0;
  toOptions = [];
  firstChange = 0;

  constructor(public dialog: MatDialog, private shlavimService:ShlavimService) {}
  
  ngOnInit(): void {  }

  items: MatbeaMenuItem[] = [
    {
      id: 0,
      name: 'קבלת פרוטוקול מסירה',
      disabled: false,
      role: 'menuitemradio',
    },
    {
      id: 1,
      name: 'קבלת מסמכי רישום זכויות',
      disabled: false,
      role: 'menuitemcheckbox',
    },
    {
      id: 2,
      name: 'קבלת פרוטוקול מסירה + מסמכי רישום זכויות',
      disabled: false,
      role: 'menuitem',
    },
  ];

  ngOnChanges(): void {
    if (!this.fromOptions[0]) {
      this.fromOptions = Array.from({
        length: this.arrayLength,
      }).map((el, i) => ({ id: i, value: i }));
      this.toOptions = Array.from({
        length: this.arrayLength - this.rangeFrom,
      }).map((el, i) => ({
        id: i + this.rangeFrom,
        value: i + this.rangeFrom,
      }));
    }
  }

  fromChanged(rangeFrom, rangeTo): void {
    if (this.firstChange < 2) {
      //TODO: remove
      this.firstChange++;
      return;
    }
    this.rangeFrom = rangeFrom;
    this.rangeTo = rangeTo;
    let length = rangeTo - this.rangeFrom + 1;
    if (length > 47) {
      this.rangeTo = this.rangeTo = this.rangeFrom + 47;
      length = 47;
    }
    this.selectedRowsChange.emit(
      Array.from({ length }).map((el, i) => i + this.rangeFrom)
    );
  }

  arvuiotAction(event): void {
    this.shlavimService.openTipulBearvuyot(this.selectedRows, 17,2, event.id);
  }

}