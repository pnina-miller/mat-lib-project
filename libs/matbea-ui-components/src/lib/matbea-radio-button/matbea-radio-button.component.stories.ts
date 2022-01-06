import {text, number, array, object, select, boolean} from '@storybook/addon-knobs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatbeaRadioButtonModule} from "@pdesks/matbea-ui-components";
import {MatbeaRadioButtonComponent} from "./matbea-radio-button.component";


export default {
  title: 'MatbeaRadioButtonComponent'
}

export const primary = () => {
  return ({
    moduleMetadata: {
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatbeaRadioButtonModule
      ]
    },
    component: MatbeaRadioButtonComponent,
    props: {
      options: object('options', [{id: 0, value: 'value1' , required:false, name:'name1', disabled:false, checked: false}, {id: 1, value: 'value2' , required: true, name:'name2', disabled:false, checked: false}]),
      labelPosition: select("labelPosition", {before:'before',after:'after'},'after'),
      tabIndex: text('tabIndex', ''),
      groupDisable: boolean('groupDisable', false),
      groupLabelPosition: select("labelPosition", {before:'before',after:'after'},'after'),
      groupName: text('groupName', ''),
      groupRequired: boolean('groupRequired', false),
      groupId: text('groupId', ''),
      groupTabIndex: text('groupTabIndex', ''),
      groupValue: text('groupValue', ''),
      checked: number('checked', 0),
      groupClass: text('groupClass', '')

    }
  });
}
