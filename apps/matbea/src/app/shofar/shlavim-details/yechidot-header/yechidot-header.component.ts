
import { Component, Input, OnInit } from '@angular/core';
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
    // this.addUnitsAction();//temp
  }

  addUnitsAction(){
    const dialogRef = this.dialog.open(HosafatYechidaComponent, {
      width: '90%',
      height: '90%',
      panelClass:'hosafat-yechida-container',
      data: {},    
    });
  }
}
