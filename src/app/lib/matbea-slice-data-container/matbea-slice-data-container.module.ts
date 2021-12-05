import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatbeaSliceDataContainerComponent } from './matbea-slice-data-container.component';
import {MatCardModule} from '@angular/material/card';
import {MatbeaButtonModule, MatbeaLebelModule} from "../index";
import { MatbeaSliceDataFooterComponent } from './matbea-slice-data-footer/matbea-slice-data-footer.component';
import { MatbeaSliceDataContentComponent } from './matbea-slice-data-content/matbea-slice-data-content.component';
import { MatbeaSliceDataSuffixComponent } from './matbea-slice-data-suffix/matbea-slice-data-suffix.component';


@NgModule({
  declarations: [
    MatbeaSliceDataContainerComponent,
    MatbeaSliceDataFooterComponent,
    MatbeaSliceDataContentComponent,
    MatbeaSliceDataSuffixComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatbeaButtonModule,
    MatbeaLebelModule
  ],
  exports:[
    MatbeaSliceDataContainerComponent,
    MatbeaSliceDataFooterComponent,
    MatbeaSliceDataContentComponent,
    MatbeaSliceDataSuffixComponent
  ]
})
export class MatbeaSliceDataContainerModule { }
