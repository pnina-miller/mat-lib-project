
import { DragPageComponent } from './drag-page.component';
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DragPageModule} from "./drag-page.module";

export default {
  title: 'DragPageComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      DragPageModule
    ]
  },
  component: DragPageComponent,
  props: {
  }
})
