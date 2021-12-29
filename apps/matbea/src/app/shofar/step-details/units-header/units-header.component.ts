import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HosafatYechidaComponent } from '../hosafat-yechida/hosafat-yechida.component';

@Component({
  selector: 'matbea-units-header',
  templateUrl: './units-header.component.html',
  styleUrls: ['./units-header.component.scss']
})
export class UnitsHeaderComponent implements OnInit {

  @Input() shalav:any

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  addUnitsAction(){
    const dialogRef = this.dialog.open(HosafatYechidaComponent, {
      width: '50%',
      height: '50%', 
      panelClass:'hosafat-shalav-container',
      data: {},    
    });
  }
}
