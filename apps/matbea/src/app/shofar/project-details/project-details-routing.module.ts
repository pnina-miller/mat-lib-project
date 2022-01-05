import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';


// const routes: Routes = [{path:"**",redirectTo:"", component: ProjectsListComponent},
const routes: Routes = [{path:"", component: ProjectDetailsComponent}, 
{path:":misparShalav/units", loadChildren: ()=> import('../shlavim-details/shlavim-details.module').then(m =>m.ShlavimDetailsModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsDetailsRoutingModule { }