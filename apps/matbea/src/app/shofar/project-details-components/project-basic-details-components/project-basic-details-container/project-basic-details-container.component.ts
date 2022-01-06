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
  hold: any;
  editMode: boolean= false;


  constructor() { }

  ngOnInit(): void {
  }

  changeBasicDetailsMode($event): void{
    if(!$event){
      this.class='over-matbea-slice-data';
      this.editMode=true
    }else {
      this.class='';
      this.editMode=false
    }
  }

}
