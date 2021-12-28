import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HosafatYechidaComponent } from '../../step-details/hosafat-yechida/hosafat-yechida.component';

@Component({
  selector: 'matbea-units-header-component',
  templateUrl: './units-header-component.component.html',
  styleUrls: ['./units-header-component.component.scss']
})
export class UnitsHeaderComponentComponent implements OnInit {

  @Input() shalav:any

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {debugger
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
