
import { MatbeaChativaComboComponent } from './matbea-chativa-combo.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatbeaChativaComboModule} from "@pdesks/matbea-shared-components";

export default {
  title: 'MatbeaChativaComboComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaChativaComboModule
    ]
  },
  component: MatbeaChativaComboComponent,
  props: {
  }
})
