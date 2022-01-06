import {text, number, boolean, array, select, object} from '@storybook/addon-knobs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {MatbeaMenuComponent} from "./matbea-menu.component";
import {MatbeaMenuModule} from "@pdesks/matbea-ui-components";


export default {
  title: 'MatbeaMenuComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaMenuModule


    ]
  },
  component: MatbeaMenuComponent,
  props: {
items: object('items', [{id: 0, name: 'value1' , disabled:false,role: 'menuitem'}, {id: 0, name: 'value2' , disabled:false, role: 'menuitem'}]),
  },


})
