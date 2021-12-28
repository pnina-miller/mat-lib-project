

import { Component, Input, OnInit } from '@angular/core';
import { ShlavimService } from '../shlavim/shlavim.service';
import { ShofarServices } from '../../../services/shofar-services';
import { CheshbonotService } from '../../cheshbonot-components/cheshbonot/cheshbonot.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'matbea-shlavim-container',
  templateUrl: './shlavim-container.component.html',
  styleUrls: ['./shlavim-container.component.scss']
})
export class ShlavimContainerComponent implements OnInit {
  shlavim: MatTableDataSource<any>;

  @Input('misparProyectSagur') misparProyectSagur: string;

  constructor(public shlavimService: ShlavimService, private shofarServices: ShofarServices) { }
  
  ngOnInit(): void {
    this.shofarServices.getShlavim(this.misparProyectSagur).subscribe((resp: any) => { this.shlavim = new MatTableDataSource(resp.data.reshimatShlavimList); })
  }


  openAddShlavimPopup(): void {
    console.log("openAddCheshbonPopup......");
    this.shlavimService.openHosafatCheshbonPopup();
  }
}
