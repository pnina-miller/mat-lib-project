import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaMenuComponent } from './matbea-menu.component';
import { MatbeaIconButtonModule } from '..';
import { MatMenuModule } from '@angular/material/menu';



@NgModule({
  declarations: [MatbeaMenuComponent],
  imports: [
    CommonModule,
    MatbeaIconButtonModule,
    MatMenuModule
  ],exports: [MatbeaMenuComponent]
})
export class MatbeaMenuModule { }
