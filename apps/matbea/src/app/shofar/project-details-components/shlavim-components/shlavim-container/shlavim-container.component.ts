import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShofarServices } from '../../../services/shofar-services';
import { ShlavimService } from '../shlavim/shlavim.service';

@Component({
  selector: 'matbea-shlavim-container',
  templateUrl: './shlavim-container.component.html',
  styleUrls: ['./shlavim-container.component.scss']
})
export class ShlavimContainerComponent implements OnInit {
  @Input('misparProyectSagur') misparProyectSagur: string;

  constructor(public shlavimService: ShlavimService, private shofarServices: ShofarServices) { }

  $shlavim = Observable.create(observer => {
    this.shofarServices.getShlavim(this.misparProyectSagur).subscribe(res => {
      observer.next(res.data.reshimatShlavimList)
    })
  })

  ngOnInit(): void {

  }

  openAddShlavimPopup(): void {
    console.log("openAddCheshbonPopup......");
    this.shlavimService.openHosafatShalavPopup(this.misparProyectSagur);
  }
}

