import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProjectBasicDetailsComponent } from './project-basic-details.component';
import { ProjectBasicDetailsContainerComponent } from '../project-basic-details-container/project-basic-details-container.component';

@Injectable({
    providedIn: 'root',
  })
export class ProjectBasicDetailsService {
    baicDetails: ProjectBasicDetailsComponent;

    init(baicDetails: ProjectBasicDetailsComponent): void{
        this.baicDetails = baicDetails;
    }


    changeMode(): void{
        this.baicDetails.changeMode();
    }

    isEditMode(): boolean{
        return this.baicDetails.editMode;
    }

    save(projectBasicDetailsContainerRef: ProjectBasicDetailsContainerComponent): void{
        this.baicDetails.saveProjectDetails(projectBasicDetailsContainerRef);
    }
  
}