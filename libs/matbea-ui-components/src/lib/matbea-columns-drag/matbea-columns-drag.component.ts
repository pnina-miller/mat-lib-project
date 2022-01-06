import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'matbea-columns-drag',
  templateUrl: './matbea-columns-drag.component.html',
  styleUrls: ['./matbea-columns-drag.component.scss']
})
export class MatbeaColumnsDragComponent implements OnInit, OnChanges {
  constructor() {
  }

  @Input() inUseList: string[];
  @Input() toChooseList: string[];
  @Input() locked: string[];
  @Input() limit: number;
  type;

  ngOnInit(): void {

  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  onMoveToChoose(st) {
    let temp = this.inUseList.indexOf(st)
    let tempList = this.inUseList.splice(temp, 1);
    if (!this.toChooseList.includes(st)) {
      this.toChooseList.push(st);
    }
  }

  onMoveToUse(st) {
    let lim = Number(this.limit) - this.locked.length;
    if (this.inUseList.length < lim) {
      let temp = this.toChooseList.indexOf(st)
      let tempList = this.toChooseList.splice(temp, 1);
      if (!this.inUseList.includes(st)) {
        this.inUseList.push(st)
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.type = typeof this.inUseList[0]
    console.log("Type", this.type)
  }

}
