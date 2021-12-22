import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepDetailsComponent } from './step-details.component';


const routes: Routes = [{path:"", component: StepDetailsComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StepDetailsRoutingModule { }