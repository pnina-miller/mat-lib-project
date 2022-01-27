import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShofarServices } from '../../../services/shofar-services';
import { ShlavimService } from '../shlavim/shlavim.service';

@Component({
  selector: 'matbea-shlavim-container',
  templateUrl: './shlavim-container.component.html',
  styleUrls: ['./shlavim-container.component.scss'],
})
export class ShlavimContainerComponent implements OnInit {
  @Input('misparProyectSagur') misparProyectSagur: number;

  shlavim: Observable<any>
  
  constructor(
    public shlavimService: ShlavimService,
    private shofarServices: ShofarServices
  ) {}

  loadData(): void {
  this.shlavim = this.shofarServices.getShlavim(this.misparProyectSagur)
  }

  ngOnInit(): void {
    this.loadData();
  }

  openAddShlavimPopup(): void {
    console.log('openAddCheshbonPopup......');
    this.shlavimService.openHosafatShalavPopup(this.misparProyectSagur, () => {
      this.loadData();
    });
  }
}
