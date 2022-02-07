import * as fromShofar from './shofar/store/reducers/shofar.reducer';
import { NgModule } from '@angular/core';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProjectsListEffects } from './shofar/store/effects/project-list.effects';
import { ColumnDefinitionsEffects } from './shofar/store/effects/columnDefinition.effects';
import { DuduTest2Module } from './shofar/dudu-test2/dudu-test2.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { CreateProjectWizardStepperModule } from './shofar/create-project-wizard/create-project-wizard-stepper/create-project-wizard-stepper.module';
import { GetKodMutavModule } from './shofar/create-project-wizard/get-kod-mutav/get-kod-mutav.module';
import { MikumVeKarkaModule } from './shofar/create-project-wizard/mikum-ve-karka/mikum-ve-karka.module';
import { BasicDetailsModule } from './shofar/create-project-wizard/basic-details/basic-details.module';
import { NetuneyAmalotModule } from './shofar/create-project-wizard/netuney-amalot/netuney-amalot.module';
import { ProjectsListModule } from './shofar/projects-list-page/projects-list/projects-list.module';
import { ProjectsListPageEffects } from './shofar/store/effects/projects-list-page.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import * as fromUser from './shofar/store/reducers/user.reducer';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import * as fromProjectDetails from './shofar/store/reducers/project-details.reducer';
import { ProjectDetailsEffects } from './shofar/store/effects/project-details.effects';

const effectsShofar = [
  ProjectsListEffects,
  ColumnDefinitionsEffects,
  ProjectsListPageEffects,
  ProjectDetailsEffects
];
const effectsProjectDetails =[
  ProjectDetailsEffects
]
@NgModule({
  declarations: [AppComponent, NotFoundComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot({ shofar: fromShofar.reducer }),
    EffectsModule.forRoot(effectsShofar),
    StoreRouterConnectingModule.forRoot(),
    MatSnackBarModule,
    DuduTest2Module,
    CreateProjectWizardStepperModule,
    GetKodMutavModule,
    BasicDetailsModule,
    MikumVeKarkaModule,
    NetuneyAmalotModule,
    ProjectsListModule,
    MatDialogModule,
    StoreModule.forFeature(fromUser.userFeatureKey, fromUser.reducer ),
    MatIconModule,
    StoreModule.forFeature(fromProjectDetails.PROJECTDETAILS_FEATURE_KEY, fromProjectDetails.reducerProjectDetails),
    EffectsModule.forFeature(effectsProjectDetails),
  ],
providers:
  [],
  // providers: [AuthGuardService, {provide : LocationStrategy , useClass: HashLocationStrategy}],
  bootstrap: [AppComponent],
})
export class AppModule {}
