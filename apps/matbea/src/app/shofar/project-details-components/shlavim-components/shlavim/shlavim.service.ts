import { Injectable } from '@angular/core';
import { ShlavimComponent } from './shlavim.component';

@Injectable({
  providedIn: 'root'
})
export class ShlavimService {
  shlavimComponent: ShlavimComponent;

  init(shlavimComponent: ShlavimComponent): void{
      this.shlavimComponent = shlavimComponent;
  }


  openHosafatShalavPopup(misparProyectSagur: any, item?: any): void{
      this.shlavimComponent.openHosafatShalavPopup(misparProyectSagur, item)
  }
}