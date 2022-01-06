import { text, number, boolean, array, select, object } from '@storybook/addon-knobs';
import { MatbeaComboComponent } from './matbea-combo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatbeaComboModule } from './matbea-combo.module';



export default {
  title: 'MatbeaComboComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatbeaComboModule


    ]
  },
  component: MatbeaComboComponent,
  props: {
    lable:text('lable','lable' ),
    hint: text('hint', ''),
    disable: boolean('disable', false),
    placeholder: text('placeholder', ''),
    valueToDefoult:number('valueToDefoult', 3),
    panelClassSelect: text('panelClassSelect',''),
    id: text('id', ''),
    transparent: boolean('transparent',false),
    options:object('options',[{id: 1, value: "value1",disable: true}, {id: 2, value: 'value 2'}, {id: 3, value: 'value 3'}]),
    prefix:text('prefix',''),
    suffix:text('suffix',''),
    iconButtomPrefixName: text('iconButtomPrefixName',''),
    iconButtomPrefixDisabled: boolean('iconButtomPrefixDisabled',false),
    iconButtomPrefixTooltip:text('iconButtomPrefixTooltip',''),
    lablePosition: select('lablePosition',{start:'start', end:'end',  top:'top'},'start' ),
    disabledTransparent: boolean('disabledTransparent', false),

  }
})
