
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShlavimDetailsComponent } from './shlavim-details.component';


const routes: Routes = [{path:"", component: ShlavimDetailsComponent}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShlavimDetailsRoutingModule { }