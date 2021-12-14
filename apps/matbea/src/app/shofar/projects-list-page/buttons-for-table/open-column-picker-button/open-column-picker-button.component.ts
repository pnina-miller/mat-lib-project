import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import * as ShofarSelectors from '../../../../shofar/store/selectors/shofar.selectors';
import * as ShofarActions from '../../../../shofar/store/actions/shofar.actions';
import {ColumnDefinition} from '../../../store/models/column-definition.model';
import {State} from "../../../store/state/shofar.state";
import {MatbeaColumnsPickerComponent} from 'libs/matbea-ui-components/src/lib/matbea-columns-picker/matbea-columns-picker.component';

@Component({
  selector: 'matbea-open-column-picker-button',
  templateUrl: './open-column-picker-button.component.html',
  styleUrls: ['./open-column-picker-button.component.scss']
})
export class OpenColumnPickerButtonComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  dataToDialog: { data: ColumnDefinition[], saveInDB: boolean,limit:number } = { data: [], saveInDB: true, limit:null };
  columsToDisplay$ = this.store$.select(ShofarSelectors.getColumnDefinitions);
  saveInDB$ = this.store$.select(ShofarSelectors.getUpdateInDBColumnDefinitions);

  constructor(private store$: Store<State>, public dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.sub.add(
      this.columsToDisplay$.subscribe(
        (val: ColumnDefinition[]) => {
          this.dataToDialog.data = val
        }
      )
    )
    this.sub.add(this.saveInDB$.subscribe(
      val => this.dataToDialog.saveInDB = val
    ));
    this.dataToDialog.limit=15;
  }

  openDialog() {
    const dialogRef = this.dialog.open(MatbeaColumnsPickerComponent,
      {
        width: '600px',
        height: '600px',
        data: this.dataToDialog,
        restoreFocus: false
      });

    dialogRef.beforeClosed().subscribe((result)=>{
      if(result){
        this.store$.dispatch(ShofarActions.setLoadingTable({loadingTable: true}));
      }
    } )
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog saveInDB: ${result?.saveInDB}`);
      console.log(`Dialog result: ${result?.data}`);
      if (result&&result.saveInDB) {
        this.store$.dispatch(ShofarActions.updateAndSaveInDBColumnDefinitions({ columnDefinitions: result.data, loading: false, loadingTable: true }))

      } else if(result){
        this.store$.dispatch(ShofarActions.updateColumnDefinitions({ columnDefinitions: result.data, loading: false, loadingTable:false }));

      }
    });
    dialogRef.backdropClick().subscribe(() => {
      this.store$.dispatch(ShofarActions.setLoadingTable({loadingTable: false}));
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
