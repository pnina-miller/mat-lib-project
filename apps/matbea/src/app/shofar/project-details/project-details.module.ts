import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDetailsComponent } from './project-details.component';
import { ProjectsDetailsRoutingModule } from './project-details-routing.module';
import {DragDropModule} from "@angular/cdk/drag-drop";
import { NatuneyMashkantaModule } from '../project-details-components/mashkanta/natuney-mashkanta/natuney-mashkanta.module';
import { MashkantaContainerModule } from '../project-details-components/mashkanta/mashkanta-container/mashkanta-container.module';
import { KablanimContainerModule } from '../project-details-components/kablanim/kablanim-container/kablanim-container.module';
import { AmalotContainerModule } from '../project-details-components/amalot/amalot-container/amalot-container.module';
import { CheshbonotModule } from '../project-details-components/cheshbonot-components/cheshbonot/cheshbonot.module';
import { HosafatCheshbonModule } from '../project-details-components/cheshbonot-components/hosafat-cheshbon/hosafat-cheshbon.module';
import { CheshbonotContainerModule } from '../project-details-components/cheshbonot-components/cheshbonot-container/cheshbonot-container.module';
import { ProjectBasicDetailsContainerModule } from '../project-details-components/project-basic-details-components/project-basic-details-container/project-basic-details-container.module';
import {ProjectDetailsHeaderModule} from "../project-details-components/project-details-header/project-details-header.module";
import { ShlavimContainerModule } from '../project-details-components/shlavim-components/shlavim-container/shlavim-container.module';
import {
  MatbeaDetailsSteperModule,
  MatbeaIconButtonModule,
  MatbeaSliceDataContainerModule,
  MatbeaSlideToggleModule
} from "@pdesks/matbea-ui-components";
import {MAT_DATE_LOCALE} from "@angular/material/core";





@NgModule({
  declarations: [
    ProjectDetailsComponent,
  ],
  imports: [
    CommonModule,
    ProjectsDetailsRoutingModule,
    DragDropModule,
    NatuneyMashkantaModule,
    KablanimContainerModule,
    MashkantaContainerModule,
    AmalotContainerModule,
    CheshbonotModule,
    HosafatCheshbonModule,
    CheshbonotContainerModule,
    ProjectBasicDetailsContainerModule,
    ProjectDetailsHeaderModule,
    MatbeaIconButtonModule,
    MatbeaDetailsSteperModule,
    MatbeaSliceDataContainerModule,
    ShlavimContainerModule

  ],
  exports:[
    ProjectDetailsComponent
  ],
  providers:[
    {provide: MAT_DATE_LOCALE, useValue: 'he-IL'},
  ]
})
export class ProjectDetailsModule { }
