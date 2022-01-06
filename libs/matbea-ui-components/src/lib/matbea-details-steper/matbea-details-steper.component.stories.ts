import { BrowserModule } from '@angular/platform-browser';
import { boolean } from '@storybook/addon-knobs';
import {MatbeaDetailsSteperModule} from "@pdesks/matbea-ui-components";
import {MatbeaDetailsSteperComponent} from "./matbea-details-steper.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'MatbeaDetailsSteperComponent'
}

export const def = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
    MatbeaDetailsSteperModule
    ]
  },
  component: MatbeaDetailsSteperComponent,
  props: {
    steps: [{name:'value1'},{name:'value2'},{name:'value3',}]
  },
  template:`<matbea-details-steper [steps]="steps"></matbea-details-steper>
  `
})
