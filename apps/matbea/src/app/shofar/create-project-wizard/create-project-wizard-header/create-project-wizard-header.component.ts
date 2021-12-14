import { Component, OnInit, Input, Inject } from '@angular/core';
import { CreateProjectWizardData } from '../create-project-wizard-common/create-project-wizard-data';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateProjectWizardButtonComponent } from '../create-project-wizard-button/create-project-wizard-button.component';

@Component({
  selector: 'matbea-create-project-wizard-header',
  templateUrl: './create-project-wizard-header.component.html',
  styleUrls: ['./create-project-wizard-header.component.scss', '../create-project-wizard-common/create-project-wizard-common-styles.css']
})
export class CreateProjectWizardHeaderComponent implements OnInit {
  @Input('wizardData')wizardData: CreateProjectWizardData;
  
  constructor(public dialogRef: MatDialogRef<CreateProjectWizardButtonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {}) { }

  ngOnInit(): void {
  }


  closeDialog(){
    this.dialogRef.close(null);
  }

}
