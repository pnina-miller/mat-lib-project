import { Component, OnInit, Input } from '@angular/core';
import { ProjectBasicDetailsService } from '../project-basic-details/project-basic-details.service';

@Component({
  selector: 'matbea-project-basic-details-container',
  templateUrl: './project-basic-details-container.component.html',
  styleUrls: ['./project-basic-details-container.component.scss']
})
export class ProjectBasicDetailsContainerComponent implements OnInit {
  @Input('kodMutav') kodMutav: string;
  @Input('misparProject') misparProject: string;
  class='';

  basicDetailsEditMode: boolean = false;


  constructor(public basicDetails: ProjectBasicDetailsService) { }

  ngOnInit(): void {
  }

  changeBasicDetailsMode($event): void{
    if(!$event){
      this.class='over-matbea-slice-data';
    }else {
      this.class='';
    }
    if(this.basicDetails.isEditMode()){
      this.saveBasicDetails()
    }else{
      this.basicDetails.changeMode();
      this.basicDetailsEditMode = this.basicDetails.isEditMode();
    }
  }

  saveBasicDetails(): void{
    this.basicDetails.save(this);
  }

}
