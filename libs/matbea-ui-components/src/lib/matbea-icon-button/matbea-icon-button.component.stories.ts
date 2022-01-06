
import { BrowserModule } from '@angular/platform-browser';
import { MatbeaIconButtonModule } from './matbea-icon-button.module';
import { MatbeaIconButtonComponent } from './matbea-icon-button.component';
import { boolean, text, select } from '@storybook/addon-knobs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


export default {
  title: 'MatbeaIconButtonComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaIconButtonModule,
      BrowserAnimationsModule

    ]
    },
  component: MatbeaIconButtonComponent,
  props: {
    icon: text('icon','home') ,
   disabled: boolean('disable',false),
   positionTooltip: select('positionTooltip', ['above', 'below' , 'left','right','before' ,'after'], 'after'),
    tooltip: text('tooltip','text to tooltip'),
    color: text('color','')
  },
})
