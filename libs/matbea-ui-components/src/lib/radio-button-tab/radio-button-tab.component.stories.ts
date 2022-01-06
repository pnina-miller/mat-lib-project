import { text, number, boolean, array } from '@storybook/addon-knobs';
import { RadioButtonTabComponent } from './radio-button-tab.component';
import { RadioButtonTabModule } from './radio-button-tab.module';
import { BrowserModule } from '@angular/platform-browser';

export default {
  title: 'RadioButtonTabComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      RadioButtonTabModule
    ]
  },
  component: RadioButtonTabComponent,
  props: {
    dataList: array('dataList',['','','']),
    value: text('value', ''),
  }
})