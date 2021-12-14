import { text, number, boolean } from '@storybook/addon-knobs';
import { MatbeaHierarchyGeneralComboComponent } from './matbea-hierarchy-general-combo.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatbeaHierarchyGeneralComboModule} from "@pdesks/matbea-shared-components";


export default {
  title: 'MatbeaHierarchyGeneralComboComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaHierarchyGeneralComboModule
    ]
  },
  component: MatbeaHierarchyGeneralComboComponent,
  props: {
    hierarchyComboIninitValue: text('hierarchyComboIninitValue', ''),
    hierarchyCombInputKod: text('hierarchyCombInputKod', ''),
    hierarchyComboKod: text('hierarchyComboKod', ''),
    hierarchyService: text('hierarchyService', ''),
    hierarchyLabel: text('hierarchyLabel', ''),
    isComboDisabled: text('isComboDisabled', ''),
  }
})
