import { text, number, boolean } from '@storybook/addon-knobs';
import { MatbeaHierarchyComboComponent } from './matbea-hierarchy-combo.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatbeaHierarchyComboModule} from "@pdesks/matbea-shared-components";

export default {
  title: 'MatbeaHierarchyComboComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaHierarchyComboModule
    ]
  },
  component: MatbeaHierarchyComboComponent,
  props: {
    misparChativa: text('misparChativa', "03"),
    misparAgaf: text('misparAgaf', ""),
    kodSector: text('kodSector', ""),
  }
})
