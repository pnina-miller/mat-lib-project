import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsListPageComponent } from './projects-list-page.component';

const routes: Routes = [{ path: '', component: ProjectsListPageComponent },
{path: 'details/:id', loadChildren: ()=> import('../project-details/project-details.module').then(m =>m.ProjectDetailsModule)}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsListPageRoutingModule { }
