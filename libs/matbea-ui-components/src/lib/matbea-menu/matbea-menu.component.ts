import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {MenuPositionX, MenuPositionY} from "@angular/material/menu";

@Component({
  selector: 'matbea-menu',
  templateUrl: './matbea-menu.component.html',
  styleUrls: ['./matbea-menu.component.scss']
})
export class MatbeaMenuComponent implements OnInit, OnChanges {
  @Input() items: MatbeaMenuItem[];
  @Output('close') _close = new EventEmitter();
  @Input() backdropClass: string;
  @Input() hasBackdrop: boolean;
  @Input() overlapTrigger: boolean;
  @Input() panelClass: string;
  @Input() xPosition: MenuPositionX="after";
  @Input() yPosition: MenuPositionY="above";
  @Input() restoreFocus: boolean;
  @Output() menuClosed = new EventEmitter();
  @Output() menuOpened = new EventEmitter();
  @Output() clickedItem = new EventEmitter();


  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('MatbeaMenuComponent ', this);
  }

}

export interface MatbeaMenuItem {
  id: string | number;
  name: string;
  disabled?: boolean;
  class?: string;
  role?: 'menuitem' | 'menuitemradio' | 'menuitemcheckbox';
}
