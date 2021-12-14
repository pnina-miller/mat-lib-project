import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'pdesks-drag-page',
  templateUrl: './drag-page.component.html',
  styleUrls: ['./drag-page.component.scss']
})
export class DragPageComponent implements OnInit {
  array = [];
  value: any= 'tempValue';
  errorMessages!: {[k:string]:string};
  form!: FormControl;
  complete!: string[];

  constructor() {
  }

  ngOnInit(): void {
    this.errorMessages={required: 'required message', email:'email message'};
    this.form = new FormControl('', [Validators.required, Validators.email]);
    this.complete =['abc', 'def', 'ghi', "jkl", 'mno','pqr'];

  }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event);
    moveItemInArray(this.array, event.previousIndex, event.currentIndex);
  }

  onClick() {
    console.log("Pressing the matbea-icon work");
  }
}
