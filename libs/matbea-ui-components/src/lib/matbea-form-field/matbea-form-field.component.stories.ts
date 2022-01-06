import {text, number, boolean, array, select} from '@storybook/addon-knobs';
import { MatbeaFormFieldComponent } from './matbea-form-field.component';
import { MatbeaFormFieldModule } from './matbea-form-field.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'MatbeaFormFieldComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaFormFieldModule
    ]
  },
  component: MatbeaFormFieldComponent,
  props: {
    type: select('type', {Select:'select', Input: 'input', TextArea: 'textarea'},"input"),
    value: array('value', []),
    placeholder: text('placeholder', ''),
    isDisable: boolean('isDisable', false),
    hint: text('hint', ''),
    error: boolean('error', false),
    errorValue: text('errorValue', ''),
    label: text('label','label'),
    doNotChose: boolean('doNotChose',false),
    prefix:text("prefix", ''),
  },
  
})
