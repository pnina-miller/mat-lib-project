
import { MatbeaSliceDataContainerComponent } from './matbea-slice-data-container.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatbeaSliceDataContainerModule} from "./matbea-slice-data-container.module";
import {
  MatbeaButtonModule,
  MatbeaIconButtonModule,
  MatbeaIconModule,
  MatbeaShmorShinuiButtonModule
} from "@pdesks/matbea-ui-components";
import {boolean, text} from "@storybook/addon-knobs";

export default {
  title: 'MatbeaSliceDataContainerComponent'
}

export const MatbeaButton = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaSliceDataContainerModule,
      MatbeaButtonModule,
      MatbeaIconModule
    ]
  },
  component: MatbeaSliceDataContainerComponent,
  props: {
    titel: text( 'titel','חשבונות')
  },
template:`
<div style="width: fit-content"><matbea-slice-data>
<matbea-slice-data-suffix>
<matbea-button type='stroked'>
<matbea-icon icon='add_circle'></matbea-icon>
שם קפתור</matbea-button>
</matbea-slice-data-suffix>
<matbea-slice-data-content><div style="height: 200px; width: 300px; border: #0094ba 1px solid"></div></matbea-slice-data-content>
<matbea-slice-data-footer>Footer</matbea-slice-data-footer>
</matbea-slice-data></div>`
})
export const MatbeaIconButton = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaSliceDataContainerModule,
      MatbeaButtonModule,
      MatbeaIconButtonModule,
      MatbeaShmorShinuiButtonModule
    ]
  },
  component: MatbeaSliceDataContainerComponent,
  props: {
    titel: text( 'titel','חשבונות'),
    footerContent: boolean('footerContent',false),

  },
  template:`
<div style="width: fit-content"><matbea-slice-data>
<matbea-slice-data-suffix>
<matbea-shmor-shinui-button></matbea-shmor-shinui-button>
</matbea-slice-data-suffix>
<matbea-slice-data-content><div style="height: 200px; width: 300px; border: #0094ba 1px solid"></div></matbea-slice-data-content>
<matbea-slice-data-footer><matbea-button  style="background-color: #c5ffdd" type='raised' >footer</matbea-button></matbea-slice-data-footer>
</matbea-slice-data></div>`
})
