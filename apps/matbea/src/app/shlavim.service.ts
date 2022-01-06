import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShlavimService {
  openHosafatCheshbonPopup() {
    alert('open Hosafat shalav Popup')
  }

  constructor() { }
}
