import { Component, OnInit, SimpleChanges } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { CheshbonotService } from '../project-details-components/cheshbonot-components/cheshbonot/cheshbonot.service';
import { ProjectBasicDetailsService } from '../project-details-components/project-basic-details-components/project-basic-details/project-basic-details.service';
import { CreateProjectWizardStepperComponent } from '../create-project-wizard/create-project-wizard-stepper/create-project-wizard-stepper.component';




@Component({
  selector: 'pdesks-dudu-test2',
  templateUrl: './dudu-test2.component.html',
  styleUrls: ['./dudu-test2.component.scss']
})
export class DuduTest2Component implements OnInit {
	misparChativa: string = "3";
	misparAgaf: string = "14";
	kodSector: string = "0358";
  misparMakal = "05140835801";
  
  basicDetailsEditMode: boolean = false;
	
  constructor(public dialog: MatDialog, public cheshbonotService: CheshbonotService, public basicDetails: ProjectBasicDetailsService) { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectWizardStepperComponent, {
      width: '1000px',
      height: '750px'
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');    
    }); 
  }

  
  chativaChanged($event){
	console.log($event);
	this.misparChativa = $event;
  }
  
  agafChanged($event){
	console.log($event);
	this.misparAgaf = $event;
  }
  
  sectorChanged($event){
	console.log($event);
	this.kodSector = $event;
  }
  
  makalChanged($event){
	console.log($event);
	this.misparMakal = $event;
  }
  
   openAddCheshbonPopup(): void{
   console.log("openAddCheshbonPopup......");
    this.cheshbonotService.openHosafatCheshbonPopup();
  }

  changeBasicDetailsMode(): void{
    this.basicDetails.changeMode();
    this.basicDetailsEditMode = this.basicDetails.isEditMode();
  }

}
