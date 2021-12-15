import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as ShofarActions from './shofar/store/actions/shofar.actions';
import *as ShofarSelectors from './shofar/store/selectors/shofar.selectors';
import {from, Subscription} from 'rxjs';

@Component({
  selector: 'pdesks-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matbea';
  id='tart';
  loading=true;
   sub = new Subscription()

  constructor(private store$:Store){
     this.store$.dispatch(ShofarActions.init());

  }
  ngOnInit(){
   this.sub= this.store$.select(ShofarSelectors.getShofarLoaded).subscribe(loading=>this.loading=loading);
  }
}