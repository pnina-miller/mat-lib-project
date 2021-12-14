import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatbeaIconButtonModule} from "@pdesks/matbea-ui-components";
import { ProjectBasicDetailsModule } from '../project-basic-details/project-basic-details.module';
import { ProjectBasicDetailsContainerComponent } from './project-basic-details-container.component';
import { MatbeaSliceDataContainerModule } from '../../../../../../../../libs/matbea-ui-components/src/lib/matbea-slice-data-container/matbea-slice-data-container.module';
import { MatbeaButtonModule } from '../../../../../../../../libs/matbea-ui-components/src/lib/matbea-button/matbea-button.module';
import { MatbeaShmorShinuiButtonModule } from '../../../../../../../../libs/matbea-ui-components/src/lib/matbea-shmor-shinui-button/matbea-shmor-shinui-button.module';


@NgModule({
  declarations: [ProjectBasicDetailsContainerComponent],
  imports: [
    CommonModule,    
    MatbeaSliceDataContainerModule,
    MatbeaButtonModule,
    MatbeaIconButtonModule,
    ProjectBasicDetailsModule,
    MatbeaShmorShinuiButtonModule,
  ],
  exports: [ProjectBasicDetailsContainerComponent]
})
export class ProjectBasicDetailsContainerModule { }
