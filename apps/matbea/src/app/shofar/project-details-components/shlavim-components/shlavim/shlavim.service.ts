import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HosafatShalavComponent } from '../hosafat-shalav/hosafat-shalav.component';
import { ShlavimComponent } from './shlavim.component';

@Injectable({
  providedIn: 'root',
})
export class ShlavimService {
  shlavimComponent: ShlavimComponent;

  constructor(public dialog: MatDialog) {}

  init(shlavimComponent: ShlavimComponent): void {
    this.shlavimComponent = shlavimComponent;
  }

  //move data to subscribe???

  openHosafatShalavPopup( misparProyectSagur: any, onClose: Function, item?: any
  ): void {
    // this.shlavimComponent.openHosafatShalavPopup(misparProyectSagur, item)
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(HosafatShalavComponent, {
      width: '50%',
      panelClass: 'hosafat-shalav-container',
      data: { misparProyectSagur: misparProyectSagur, item: item },
    });
    dialogRef.afterClosed().subscribe((newProject) => {
      onClose();
    });
  }
}
