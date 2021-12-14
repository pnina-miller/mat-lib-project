import { Component, OnInit, Input } from '@angular/core';
import { CheshbonotService } from '../cheshbonot/cheshbonot.service';


@Component({
  selector: 'matbea-cheshbonot-container',
  templateUrl: './cheshbonot-container.component.html',
  styleUrls: ['./cheshbonot-container.component.scss']
})
export class CheshbonotContainerComponent implements OnInit {
  @Input('misparProyectSagur') misparProyectSagur: string;
  @Input('misparBank') misparBank: string;
  
  constructor(public cheshbonotService: CheshbonotService) { }

  ngOnInit(): void {
  }


  openAddCheshbonPopup(): void{
    console.log("openAddCheshbonPopup......");
     this.cheshbonotService.openHosafatCheshbonPopup();
   }
}
