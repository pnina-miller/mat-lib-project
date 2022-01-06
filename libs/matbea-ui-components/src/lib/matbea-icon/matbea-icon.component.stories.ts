import {BrowserModule} from '@angular/platform-browser';
import {boolean, text, select} from '@storybook/addon-knobs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatbeaIconModule} from "@pdesks/matbea-ui-components";
import {MatbeaIconComponent} from "./matbea-icon.component";


export default {
  title: 'MatbeaIconComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaIconModule,
      BrowserAnimationsModule

    ]
  },
  component: MatbeaIconComponent,
  props: {
    icon: text('icon', 'home'),
    fontIcon: text('fontIcon', ''),
    fontSet: text('fontSet', ''),
    inline: boolean('inline', false),
    svgIcon: text('svgIcon', ''),
  },
})
