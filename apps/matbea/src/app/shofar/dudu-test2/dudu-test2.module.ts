import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuduTest2Component } from './dudu-test2.component';

import { MatDialogModule } from '@angular/material/dialog';
import { CreateProjectWizardStepperModule } from '../create-project-wizard/create-project-wizard-stepper/create-project-wizard-stepper.module';
import { CreateProjectWizardButtonModule } from '../create-project-wizard/create-project-wizard-button/create-project-wizard-button.module';
import { MatbeaHierarchyComboModule } from '@pdesks/matbea-shared-components';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatbeaSliceDataContainerModule } from '../../../../../../libs/matbea-ui-components/src/lib/matbea-slice-data-container/matbea-slice-data-container.module';
import { MatbeaButtonModule } from '../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import {MatbeaIconButtonModule} from "@pdesks/matbea-ui-components";
import { CheshbonotContainerModule } from '../project-details-components/cheshbonot-components/cheshbonot-container/cheshbonot-container.module';
import { CheshbonotModule } from '../project-details-components/cheshbonot-components/cheshbonot/cheshbonot.module';
import { ProjectBasicDetailsContainerModule } from '../project-details-components/project-basic-details-components/project-basic-details-container/project-basic-details-container.module';





@NgModule({
  declarations: [DuduTest2Component],
  imports: [
    CommonModule,
    MatbeaHierarchyComboModule,
    MatDialogModule,
    CreateProjectWizardStepperModule,
    CreateProjectWizardButtonModule, 
    CheshbonotModule,
    
    BrowserModule,
    BrowserAnimationsModule,
    MatbeaSliceDataContainerModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule,
    ProjectBasicDetailsContainerModule,
    CheshbonotContainerModule,
  ],
  exports: [ DuduTest2Component ]
})
export class DuduTest2Module { }
