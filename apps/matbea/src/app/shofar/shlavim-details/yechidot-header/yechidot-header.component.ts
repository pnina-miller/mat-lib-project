import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HosafatYechidaComponent } from '../hosafat-yechida/hosafat-yechida.component';

@Component({
  selector: 'matbea-yechidot-header',
  templateUrl: './yechidot-header.component.html',
  styleUrls: ['./yechidot-header.component.scss']
})
export class YechidotHeaderComponent implements OnInit {

  @Input() shalav:any

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.addUnitsAction();//temp
  }

  addUnitsAction(){
    const dialogRef = this.dialog.open(HosafatYechidaComponent, {
      width: '50%',
      height: '100%', 
      panelClass:'hosafat-shalav-container',
      data: {},    
    });
  }
}