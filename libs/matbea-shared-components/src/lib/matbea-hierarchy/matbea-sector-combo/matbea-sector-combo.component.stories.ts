import { text, number, boolean } from '@storybook/addon-knobs';
import { MatbeaSectorComboComponent } from './matbea-sector-combo.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatbeaSectorComboModule} from "@pdesks/matbea-shared-components";

export default {
  title: 'MatbeaSectorComboComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaSectorComboModule
    ]
  },
  component: MatbeaSectorComboComponent,
  props: {
    misparAgaf: text('misparAgaf', "22"),
  }
})
