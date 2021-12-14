import { text, number, boolean } from '@storybook/addon-knobs';
import { MatbeaMakalComboComponent } from './matbea-makal-combo.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatbeaMakalComboModule} from "@pdesks/matbea-shared-components";

export default {
  title: 'MatbeaMakalComboComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [ BrowserModule,
      BrowserAnimationsModule,
      MatbeaMakalComboModule
    ]
  },
  component: MatbeaMakalComboComponent,
  props: {
    kodSector: text('kodSector', ""),
  }
})
