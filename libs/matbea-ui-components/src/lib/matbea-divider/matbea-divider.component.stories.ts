
import { MatbeaDividerComponent } from './matbea-divider.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatbeaDividerModule } from './matbea-divider.module';
import { boolean } from '@storybook/addon-knobs';

export default {
  title: 'MatbeaDividerComponent'
}

export const Vertical = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaDividerModule
    ]
  },
  component: MatbeaDividerComponent,
  props: {
    vertical:boolean('vertical',true)
  },
  template:`<div style=" display: flex;
  border: 3px solid #3a7763;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  border: 3px solid #3a7763;">
  <div style="height: 300px;
  width: 300px;    
  "></div> <matbea-divider [vertical]='true'></matbea-divider>  <div style="height: 300px;
  width: 300px;    
  "></div></div>`
})
export const Horizontal = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaDividerModule
    ]
  },
  component: MatbeaDividerComponent,
  props: {
    vertical:boolean('vertical',true)
  },
  template:`<div style="     display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  border: 3px solid #3a7763;">
  <div style="height: 300px;
  width: 300px;     background-color: aquamarine;
  "></div> <matbea-divider></matbea-divider>  <div style="height: 300px;
  width: 300px;     background-color: aquamarine;
  "></div></div>`
})