
import { MatbeaPickerElementComponent } from './matbea-picker-element.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatbeaPickerElementModule } from './matbea-picker-element.module';
import { select, boolean } from '@storybook/addon-knobs';

export default {
  title: 'MatbeaPickerElementComponent'
}

export const Add = () => ({
  moduleMetadata: {
    imports: [BrowserModule,
      MatbeaPickerElementModule]
  },
  component: MatbeaPickerElementComponent,
  props: {
    type: select('type',['add','remove','lock'],'add'),
    disabled: boolean('disabled', false),
  },
  template: `
  <matbea-picker-element type='add'>Text to initial</matbea-picker-element>
  `
})
export const Remove = () => ({
  moduleMetadata: {
    imports: [BrowserModule,
      MatbeaPickerElementModule]
  },
  component: MatbeaPickerElementComponent,
  props: {
    type: select('type',['add','remove','lock'],'remove' ),
    disabled: boolean('disabled', false),
  },
  template: `
  <matbea-picker-element type='remove'>Text to initial</matbea-picker-element>
  `
})
export const Disabled = () => ({
  moduleMetadata: {
    imports: [BrowserModule,
      MatbeaPickerElementModule]
  },
  component:MatbeaPickerElementComponent,
  props: {
    type: select('type',['add','remove','lock'],'lock' ),
    disabled: boolean('disabled', false),
  },
  template: `

  <matbea-picker-element type='lock'>Text to initial</matbea-picker-element>

  `
})