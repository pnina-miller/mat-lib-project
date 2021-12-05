import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipePipe } from './pipe.pipe';



@NgModule({
  declarations: [ PipePipe],
  imports: [
    CommonModule
  ],
exports:[
  PipePipe
]
})
export class PipesModule { }
