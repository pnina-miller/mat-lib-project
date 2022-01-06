import {text, number, boolean, array, select} from '@storybook/addon-knobs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MatbeaSlideToggleModule} from "@pdesks/matbea-ui-components";
import {MatbeaSlideToggleComponent} from "./matbea-slide-toggle.component";
import {MatSlideToggleChange} from "@angular/material/slide-toggle/slide-toggle";


export default {
  title: 'MatbeaSlideToggleComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaSlideToggleModule


    ]
  },
  component: MatbeaSlideToggleComponent,
  props: {
    disabled: boolean("disabled", false),
    checked: boolean("checked", false),
    disableRipple: boolean('disableRipple', false),
    id: text('id', ''),
    labelPosition: select("labelPosition", {before: 'before', after: 'after'}, 'before'),
    name: text('name', null),
    required: boolean('required', false),
    classLable: text('classLable', ''),
    lable: text('lable', ''),
  }

})
