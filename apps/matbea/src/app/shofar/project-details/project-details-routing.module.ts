import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';


// const routes: Routes = [{path:"**",redirectTo:"", component: ProjectsListComponent},
const routes: Routes = [{path:"", component: ProjectDetailsComponent}, 
{path:"units", loadChildren: ()=> import('../step-details/step-details.module').then(m =>m.StepDetailsModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsDetailsRoutingModule { }