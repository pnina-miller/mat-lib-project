
import { MatbeaShmorShinuiButtonComponent } from './matbea-shmor-shinui-button.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatbeaShmorShinuiButtonModule} from "@pdesks/matbea-ui-components";
import {boolean} from "@storybook/addon-knobs";

export default {
  title: 'MatbeaShmorShinuiButtonComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaShmorShinuiButtonModule
    ]
  },
  component: MatbeaShmorShinuiButtonComponent,
  props: {
    disabled: boolean('disabled',true),
    shkifut: boolean('shkifut',false),
    hold: boolean("hold", false),
  }
})
