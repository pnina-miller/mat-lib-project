
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatbeaPickerElementModule } from '../matbea-picker-element/matbea-picker-element.module';
import { MatbeaColumnsDragComponent } from './matbea-columns-drag.component';
import { array } from '@storybook/addon-knobs';
const inUse: string[]  = [
  'Get to work',
  'Pick up groceries',
  'Go home',
  'Fall asleep'
];

const toChoose: string[]  = [
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog',
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog',
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog',
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog',
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog',
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog',
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog',
  'Get up',
  'Brush teeth',
  'Take a shower',
  'Check e-mail',
  'Walk dog'
];
export default {
  title: 'MatbeaColumnsDragComponent'
}

export const primary = () => ({

  moduleMetadata: {
    imports: [
      BrowserModule,
      MatbeaPickerElementModule,
      DragDropModule,
      MatGridListModule,
      MatListModule
    ]
    },
  component: MatbeaColumnsDragComponent,
  props: {
    inUseList:array("inUseList", inUse),
    toChooseList: array("toChooseList", toChoose)
  },
  // template: `<matbea-columns-drag [inUseList]= inUse  [toChooseList]= toChoose style="height:300px" ></matbea-columns-drag> `,
})