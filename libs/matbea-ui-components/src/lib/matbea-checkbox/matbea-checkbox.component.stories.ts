import { text, number, boolean, array, select } from '@storybook/addon-knobs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatbeaCheckboxComponent} from "./matbea-checkbox.component";
import {MatbeaCheckboxModule} from "./matbea-checkbox.module";

export default {
  title: 'MatbeaCheckboxComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaCheckboxModule
    ]
  },
  component: MatbeaCheckboxComponent,
  props: {
    disabled: boolean('disabled', false),
    id: text('id', ''),
    labelPosition: select('labelPosition',{before:'before',after:'after' },'before'),
    indeterminate: boolean('indeterminate', false),
    checked: boolean('checked', false),
    required: boolean('required', false),
    tabIndex: text('tabIndex',''),
    value: boolean('value', false),
    name: text('name', ''),
    lable: text('lable', ''),
  }
})
