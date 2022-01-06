import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../store/state/shofar.state';
import { Subscription } from 'rxjs';
import * as ShofarSelectors from '../../../shofar/store/selectors/shofar.selectors';


@Component({
  selector: 'matbea-buttons-for-table',
  templateUrl: './buttons-for-table.component.html',
  styleUrls: ['./buttons-for-table.component.scss']
})
export class ButtonsForTableComponent implements OnInit, OnDestroy {
  dataSourceLenght: number = 0;
  dataSourceLenght$ = this.store$.select(ShofarSelectors.getProjectsWithFilter);
  projectListLenght$=this.store$.select(ShofarSelectors.getProjectListLenght);
  sub: Subscription = new Subscription();



  constructor(private store$: Store<State>) { }


  ngOnInit(): void {
    this.sub.add(this.projectListLenght$.subscribe(
      (lenght)=>{
        this.dataSourceLenght= lenght
      }
    ));
    this.sub.add(this.dataSourceLenght$.subscribe(
      (v) => {
        this.dataSourceLenght = v ? v.length : this.dataSourceLenght;
        console.log(" this.dataSourceLenght: ", this.dataSourceLenght);
      },
      (err) => {
        console.log("Error", err)
      },
      () => {
        console.log("Continiu")
      }
    )
    );


  }
updateDataLength(length){
  this.dataSourceLenght=length;
}
  ngOnDestroy(): void {
    this.sub.unsubscribe()
    }

}
