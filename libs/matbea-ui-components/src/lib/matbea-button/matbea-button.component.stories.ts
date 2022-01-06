import {text, number, boolean, select} from '@storybook/addon-knobs';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {MatbeaButtonModule} from "@pdesks/matbea-ui-components";
import {MatbeaButtonComponent} from "./matbea-button.component";


export default {
  title: 'MatbeaButtonComponent'
}

export const def = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaButtonModule,


    ]
  },
  component: MatbeaButtonComponent,
  props: {

    disabled: boolean('disabled', true),
    positionTooltip: text('positionTooltip', 'above'),
    tooltip: text('tooltip', ''),
    color: select( 'color', {warn: "warn", primary: 'primary', accent: 'accent', null: null}, null),
    size: text('size', 's'),
    // type: select('type', {raised:'raised', stroked: 'stroked', flat: 'flat', def:'def'},'raised'),
    type: select("type", {'mat-stroked':'mat-stroked' , 'mat-raised':'mat-raised', 'mat-def':'mat-def' ,'mat-flat': 'mat-flat', 'matbea-raised': 'matbea-raised','def': 'def' ,'matbea-stroked': 'matbea-stroked','matbea-regular':'matbea-regular'},'mat-def'),
    icon: text('icon',''),
    style: text ('style','')

  },
  template: `<div><matbea-button type= 'mat-def' >def</matbea-button></div>`
})
export const raised = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaButtonModule,


    ]
  },
  component: MatbeaButtonComponent,
  props: {

    disabled: boolean('disabled', true),
    positionTooltip: text('positionTooltip', 'above'),
    tooltip: text('tooltip', ''),
    color: select( 'color', {warn: "warn", primary: 'primary', accent: 'accent', null: null}, null),
    size: text('size', 's'),
    type: select("type", {'mat-stroked':'mat-stroked' , 'mat-raised':'mat-raised', 'mat-def':'mat-def' ,'mat-flat': 'mat-flat', 'matbea-raised': 'matbea-raised','def': 'def' ,'matbea-stroked': 'matbea-stroked','matbea-regular':'matbea-regular'},'mat-raised'),
    icon: text('icon',''),
    style: text ('style','')

  },
  template: `<div><matbea-button type= 'mat-raised' >raised</matbea-button></div>`
})
export const stroked = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaButtonModule,


    ]
  },
  component: MatbeaButtonComponent,
  props: {

    disabled: boolean('disabled', true),
    positionTooltip: text('positionTooltip', 'above'),
    tooltip: text('tooltip', ''),
    color: select( 'color', {warn: "warn", primary: 'primary', accent: 'accent', null: null}, null),
    size: text('size', 's'),
    // type: select('type', {raised:'raised', stroked: 'stroked', flat: 'flat', def:'def'},'raised'),
    type: select("type", {'mat-stroked':'mat-stroked' , 'mat-raised':'mat-raised', 'mat-def':'mat-def' ,'mat-flat': 'mat-flat', 'matbea-raised': 'matbea-raised','def': 'def' ,'matbea-stroked': 'matbea-stroked','matbea-regular':'matbea-regular'},'mat-stroked'),
    icon: text('icon',''),
    style: text ('style','')

  },
  template: `<div><matbea-button type= 'mat-stroked' >stroked</matbea-button></div>`
})
export const flat = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaButtonModule,


    ]
  },
  component: MatbeaButtonComponent,
  props: {

    disabled: boolean('disabled', true),
    positionTooltip: text('positionTooltip', 'above'),
    tooltip: text('tooltip', ''),
    color: select( 'color', {warn: "warn", primary: 'primary', accent: 'accent', null: null}, null),
    size: text('size', 's'),
    // type: select('type', {raised:'raised', stroked: 'stroked', flat: 'flat', def:'def'},'raised'),
    type: select("type", {'mat-stroked':'mat-stroked' , 'mat-raised':'mat-raised', 'mat-def':'mat-def' ,'mat-flat': 'mat-flat', 'matbea-raised': 'matbea-raised','def': 'def' ,'matbea-stroked': 'matbea-stroked','matbea-regular':'matbea-regular'},'mat-flat'),
    icon: text('icon',''),
    style: text ('style','')

  },
  template: `<div><matbea-button type= 'mat-flat' >flat</matbea-button></div>`
})
export const matbeaRaiser = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaButtonModule,


    ]
  },
  component: MatbeaButtonComponent,
  props: {

    disabled: boolean('disabled', true),
    positionTooltip: text('positionTooltip', 'above'),
    tooltip: text('tooltip', ''),
    color: select( 'color', {warn: "warn", primary: 'primary', accent: 'accent', null: null}, null),
    size: text('size', 's'),
    // type: select('type', {raised:'raised', stroked: 'stroked', flat: 'flat', def:'def'},'raised'),
    type: select("type", {'mat-stroked':'mat-stroked' , 'mat-raised':'mat-raised', 'mat-def':'mat-def' ,'mat-flat': 'mat-flat', 'matbea-raised': 'matbea-raised','def': 'def' ,'matbea-stroked': 'matbea-stroked','matbea-regular':'matbea-regular'},'matbea-raised'),
    icon: text('icon',''),
    style: text ('style','')

  },
  template: `<div><matbea-button type= 'matbea-raised'>flat</matbea-button></div>`
})
export const matbeaStroked = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaButtonModule,


    ]
  },
  component: MatbeaButtonComponent,
  props: {

    disabled: boolean('disabled', true),
    positionTooltip: text('positionTooltip', 'above'),
    tooltip: text('tooltip', ''),
    color: select( 'color', {warn: "warn", primary: 'primary', accent: 'accent', null: null}, null),
    size: text('size', 's'),
    // type: select('type', {raised:'raised', stroked: 'stroked', flat: 'flat', def:'def'},'raised'),
    type: select("type", {'mat-stroked':'mat-stroked' , 'mat-raised':'mat-raised', 'mat-def':'mat-def' ,'mat-flat': 'mat-flat', 'matbea-raised': 'matbea-raised','def': 'def' ,'matbea-stroked': 'matbea-stroked','matbea-regular':'matbea-regular'},'matbea-stroked'),
    icon: text('icon',''),
    style: text ('style','')

  },
  template: `<div><matbea-button type= 'matbea-stroked'>הוספת פרויקט</matbea-button></div>`
})
export const matbeaRegular = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaButtonModule,


    ]
  },
  component: MatbeaButtonComponent,
  props: {

    disabled: boolean('disabled', true),
    positionTooltip: text('positionTooltip', 'above'),
    tooltip: text('tooltip', ''),
    color: select( 'color', {warn: "warn", primary: 'primary', accent: 'accent', null: null}, null),
    size: text('size', 's'),
    // type: select('type', {raised:'raised', stroked: 'stroked', flat: 'flat', def:'def'},'raised'),
    type: select("type", {'mat-stroked':'mat-stroked' , 'mat-raised':'mat-raised', 'mat-def':'mat-def' ,'mat-flat': 'mat-flat', 'matbea-raised': 'matbea-raised','def': 'def' ,'matbea-stroked': 'matbea-stroked','matbea-regular':'matbea-regular'},'matbea-stroked'),
    icon: text('icon',''),
    style: text ('style','')

  },
  template: `<div><matbea-button type= 'matbea-regular'>הוספת פרויקט</matbea-button></div>`
})
export const ButtonWithIcon = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaButtonModule,


    ]
  },
  component: MatbeaButtonComponent,
  props: {

    disabled: boolean('disabled', true),
    positionTooltip: text('positionTooltip', 'above'),
    tooltip: text('tooltip', ''),
    color: text( 'color', "warn"),
    size: text('size', 's'),
    type: select("type", {'mat-stroked':'mat-stroked' , 'mat-raised':'mat-raised', 'mat-def':'mat-def' ,'mat-flat': 'mat-flat', 'matbea-raised': 'matbea-raised','def': 'def' ,'matbea-stroked': 'matbea-stroked','matbea-regular':'matbea-regular'},'def'),
    icon: text('icon','')

  },
  template: `<matbea-button icon='home'>Text to button</matbea-button>`
})
