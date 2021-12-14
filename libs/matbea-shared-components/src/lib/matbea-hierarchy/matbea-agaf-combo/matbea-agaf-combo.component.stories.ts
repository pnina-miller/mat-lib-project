import { text, number, boolean } from '@storybook/addon-knobs';
import { MatbeaAgafComboComponent } from './matbea-agaf-combo.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatbeaAgafComboModule } from './matbea-agaf-combo.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export default {
  title: 'MatbeaAgafComboComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaAgafComboModule
    ]
  },
  component: MatbeaAgafComboComponent,
  props: {
    misparChativa: text('misparChativa', "03"),
  }
})
