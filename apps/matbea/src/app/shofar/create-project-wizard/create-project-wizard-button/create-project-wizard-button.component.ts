import { Component, OnInit } from '@angular/core';
import { CreateProjectWizardStepperComponent } from '../create-project-wizard-stepper/create-project-wizard-stepper.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import * as ShofarActions from '../../store/actions/shofar.actions';
import {initProject} from '../../store/models/project.model';


@Component({
  selector: 'matbea-create-project-wizard-button',
  templateUrl: './create-project-wizard-button.component.html',
  styleUrls: ['./create-project-wizard-button.component.scss']
})
export class CreateProjectWizardButtonComponent implements OnInit {
    
  constructor(public dialog: MatDialog, private store$: Store) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateProjectWizardStepperComponent, {
      width: '80%',
      height: '85%',
     // data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(newProject => {
      console.log('The dialog was closed - new project is ' + newProject);    
      if(newProject != undefined){
        newProject = initProject(newProject);
        this.store$.dispatch(ShofarActions.addNewProject({ newProject: newProject  }));
      }
    }); 
  }


  public setNewProject(): void{

  }
}
