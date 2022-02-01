
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { CheshbonotComponent } from './cheshbonot.component';

@Injectable({
    providedIn: 'root',
  })
export class CheshbonotService {
    cheshbonotComponent: CheshbonotComponent;

    init(cheshbonotComponent: CheshbonotComponent): void{
        this.cheshbonotComponent = cheshbonotComponent;
    }


    openHosafatCheshbonPopup(): void{
        this.cheshbonotComponent.openHosafatCheshbonPopup()
    }
 
}
