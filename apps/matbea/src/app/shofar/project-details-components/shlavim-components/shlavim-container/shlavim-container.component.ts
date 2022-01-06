import { Component, Input, OnInit } from '@angular/core';
import { ShlavimService } from 'apps/matbea/src/app/shlavim.service';
import { ShofarServices } from '../../../services/shofar-services';
import { CheshbonotService } from '../../cheshbonot-components/cheshbonot/cheshbonot.service';

@Component({
  selector: 'matbea-shlavim-container',
  templateUrl: './shlavim-container.component.html',
  styleUrls: ['./shlavim-container.component.scss']
})
export class ShlavimContainerComponent implements OnInit {
  @Input('misparProyectSagur') misparProyectSagur: string;
  @Input('misparBank') misparBank: string;
  @Input('projectId') projectId: string;
  
  constructor(public shlavimService: ShlavimService,private shofarServices : ShofarServices) { }
shlavim:any
  ngOnInit(): void {
    this.shofarServices.getShlavim(this.misparProyectSagur).subscribe(resp => { this.shlavim=resp.data.reshimatShlavimList})     

  }


  openAddShlavimPopup(): void{
    console.log("openAddCheshbonPopup......");
     this.shlavimService.openHosafatCheshbonPopup();
   }
}
