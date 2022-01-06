import {text, number, array, object, select, boolean} from '@storybook/addon-knobs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatbeaButtonToggleModule} from "@pdesks/matbea-ui-components";
import {MatbeaButtonToggleComponent} from "./matbea-button-toggle.component";


export default {
  title: 'MatbeaButtonToggleComponent'
}

export const primary = () => {
  return ({
    moduleMetadata: {
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatbeaButtonToggleModule
      ]
    },
    component: MatbeaButtonToggleComponent,
    props: {
      value: object('value', [{id: 0, value: 'value1' , name:'name1', disabled:false, checked: false}, {id: 1, value: 'value2' , name:'name2', disabled:false, checked: false}]),

    }
  });
}
