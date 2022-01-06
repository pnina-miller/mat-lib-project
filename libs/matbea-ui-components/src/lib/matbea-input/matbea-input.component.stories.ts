import {text, number, boolean, array, select} from '@storybook/addon-knobs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatbeaInputModule} from "@pdesks/matbea-ui-components";
import {MatbeaInputComponent} from "./matbea-input.component";


export default {
  title: 'MatbeaInputComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaInputModule


    ]
  },
  component: MatbeaInputComponent,
  props: {
    lable: text("lable", ''),
    class: text("class", ''),
    placeholder: text('placeholder',''),
    value: text('value',''),
    limit: number('limit', 10),
    type: text('type', ''),
    disabled: boolean('disabled', false),
    prefix: text('prefix',''),
    suffix: text('suffix', ''),
    iconButtomPrefixName: text('iconButtomPrefixName', ''),
    iconButtomPrefixDisabled: boolean('iconButtomPrefixDisabled', false),
    iconButtomPrefixTooltip: text('iconButtomPrefixTooltip', ''),
    hint: text('hint',''),
    id: text('id',''),
    lablePosition: select('lablePosition',{start:'start', top:'top', end: 'end'}, 'start'),
    transparent: boolean('transparent', false),
    disabledTransparent: boolean('disabledTransparent', false),
    autocomplete: array('autocomplete',['a','b','c','d'])
  }

})
