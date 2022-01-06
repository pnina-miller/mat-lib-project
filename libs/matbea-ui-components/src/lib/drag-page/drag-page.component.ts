import {Component, OnInit, ViewChild} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {object} from "@storybook/addon-knobs";
import {MatbeaMenuComponent, MatbeaMenuItem} from "../matbea-menu/matbea-menu.component";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'pdesks-drag-page',
  templateUrl: './drag-page.component.html',
  styleUrls: ['./drag-page.component.scss']
})
export class DragPageComponent implements OnInit {
  array = [];
  value: any = 'tempValue';
  errorMessages: { [k: string]: string };
  form: FormControl;
  complete: string[];
  campaignOne: FormGroup;
  campaignTwo: FormGroup;
  values = [{id: 0, value: 'value1', name: 'name1', disabled: true},
    {id: 1, value: 'value2', name: 'name2'},
    {id: 2, value: 'value3', name: 'name3'},
    {id: 3, value: 'value4', name: 'name4', disabled: false}]
  displayedColumns = ['id', 'value', 'name'];
  select: 'matbea-button';
  items: MatbeaMenuItem [] = [];
  items1: MatbeaMenuItem [] = [];


  constructor() {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    this.campaignOne = new FormGroup({
      start: new FormControl(new Date(year, month, 13)),
      end: new FormControl(new Date(year, month, 16))
    });

    this.campaignTwo = new FormGroup({
      start: new FormControl(new Date(year, month, 15)),
      end: new FormControl(new Date(year, month, 19))
    });
  }

  ngOnInit(): void {
    this.errorMessages = {required: 'required message', email: 'email message'};
    this.form = new FormControl('', [Validators.required, Validators.email]);
    this.complete = ['abc', 'def', 'ghi', "jkl", 'mno', 'pqr'];
    let item1 = {id: 0, name: 'value1', disabled: false, role: 'menuitemradio'} as MatbeaMenuItem;
    let item2 = {id: 1, name: 'value2', disabled: true, role: 'menuitemcheckbox'} as MatbeaMenuItem;
    let item3 = {id: 0, name: 'value3', disabled: false, role: 'menuitem'} as MatbeaMenuItem;
    let item4 = {id: 1, name: 'value4', disabled: false, role: 'menuitem'} as MatbeaMenuItem;

    this.items.push(item1);
    this.items.push(item2);
    this.items1.push(item2);
    this.items1.push(item3);
    this.items1.push(item4);

  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.array, event.previousIndex, event.currentIndex);
  }

  onClick() {
    console.log("Pressing the matbea-icon work");
  }

  selectedCh($event) {
    console.log('Selected this ' + $event);
  }

  valueChange($event) {
    console.log('THIS IS TOGGLE ' + $event);
  }

  console($event: any) {
    console.log($event)

  }
}
