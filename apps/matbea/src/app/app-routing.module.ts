import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuardService } from './shofar/utils/auth-guatd.service';
import { DuduTest2Component } from './shofar/dudu-test2/dudu-test2.component';
import { GetKodMutavComponent } from './shofar/create-project-wizard/get-kod-mutav/get-kod-mutav.component';
import { CreateProjectWizardStepperComponent } from './shofar/create-project-wizard/create-project-wizard-stepper/create-project-wizard-stepper.component';
import { BasicDetailsComponent } from './shofar/create-project-wizard/basic-details/basic-details.component';
import { MikumVeKarkaComponent } from './shofar/create-project-wizard/mikum-ve-karka/mikum-ve-karka.component';
import { NetuneyAmalotComponent } from './shofar/create-project-wizard/netuney-amalot/netuney-amalot.component';
import { ProjectsListComponent } from './shofar/projects-list-page/projects-list/projects-list.component';






const routes: Routes = [

    {path: 'dudu4', component: DuduTest2Component},
    {path: 'createProjectWizard', component: CreateProjectWizardStepperComponent},
    {path: 'createProjectWizard/getKodMutav', component: GetKodMutavComponent},
    {path: 'createProjectWizard/basicDetails', component: BasicDetailsComponent},
    {path: 'createProjectWizard/mikumVeKarka', component: MikumVeKarkaComponent},
    {path: 'createProjectWizard/netuneyAmalot', component: NetuneyAmalotComponent},
    {path: 'tableDudu', component: ProjectsListComponent},
    {path: '', redirectTo: 'table', pathMatch: 'full'},

    { path: 'table', loadChildren: () => import('./shofar/projects-list-page/projects-list-page.module').then(m => m.ProjectsListPageModule) },
    {path: '**', component:NotFoundComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

 }
