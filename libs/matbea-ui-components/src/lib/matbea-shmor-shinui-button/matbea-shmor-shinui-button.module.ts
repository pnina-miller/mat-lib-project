import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaShmorShinuiButtonComponent } from './matbea-shmor-shinui-button.component';
import {MatbeaButtonModule, MatbeaIconButtonModule} from '@pdesks/matbea-ui-components';



@NgModule({
  declarations: [
    MatbeaShmorShinuiButtonComponent
  ],
  imports: [
    CommonModule,
    MatbeaIconButtonModule,
    MatbeaButtonModule
  ],
  exports:[
    MatbeaShmorShinuiButtonComponent
  ]
})
export class MatbeaShmorShinuiButtonModule { }
