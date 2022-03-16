import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as ShofarSelectors from '../../store/selectors/shofar.selectors';
import {Subscription} from 'rxjs';
import {State} from '../../store/state/shofar.state';
import {ColumnDefinition} from '../../store/models/column-definition.model';
import {Project} from "../../store/models/project.model";
import {StateProjectDetails} from "../../store/state/project-details.state";
import * as ProjectDetailsAction from "../../store/actions/project-details.actions";
import * as ShofarActions from "../../store/actions/shofar.actions";
import {
  AbstractField,
  TableField,
  TablePagination,
  TableSetting,
  VisibleActionMenu,
} from 'dynamic-mat-table';
import { MatbeaTableCellComponent } from 'libs/matbea-ui-components/src/lib/matbea-table-dynamic/matbea-table-cell/matbea-table-cell.component';

@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})

export class ProjectsListComponent implements OnInit {

  displayedColumns$ = this.store$.select(ShofarSelectors.getColumnDefinitions);
  dataSource$ = this.store$.select(ShofarSelectors.getProjectsWithFilter);
  dataSource
  displayedColumns: ColumnDefinition[];
  dinamicDisplayedColumns: TableField<any>[]
  sub: Subscription = new Subscription();
  loadingTable$ = this.store$.select(ShofarSelectors.getLoadingTable);
  loadingTable = true;
  messages: any[];
  messages$ = this.store$.select(ShofarSelectors.getMessagesToTable);
  projectListLenght: number;


  constructor(private route: ActivatedRoute, private store$: Store<State>, private storeProjectDetails$: Store<StateProjectDetails>) {
  }
headerFieldSetting={headerTooltipEnable:false, dynamicCellComponent:MatbeaTableCellComponent, clickable:true, clickType: 'cell', draggable: false, filterable: false, }
  ngOnInit(): void { 
    this.dataSource$.subscribe((r:any[])=>{;
      let newarr = r.map(el=> Object.entries(el).reduce((obj, entry)=>( { [entry[0]=='id'?'rowId':entry[0]]:entry[1], ...obj } ),{}) );
       this.dataSource=newarr
      })
        this.sub.add(this.displayedColumns$.subscribe(
        (val) => {
          console.log('Display columns in project list component', val)
          this.displayedColumns = val;
          this.dinamicDisplayedColumns=val.map((column,index) => (
            {...this.headerFieldSetting, index, header:column.columnnamehebrew, name: column.columnnameenglish=='shmKablanimMeshurshar'?'nothing':column.columnnameenglish} as TableField<any>));
        },
        (err) => console.log('Error for columns in project list component', err),
        () => console.log('Comlite for colums in project list component')
      )
    );
    this.sub.add(this.loadingTable$.subscribe(
      (val) => {
        this.loadingTable = val;
      }
    ));
    this.sub.add(this.messages$.subscribe(
      (mess) => {
        this.messages = mess;
      }
    ))
  }
  toDeteils($event: Project) {
    this.storeProjectDetails$.dispatch(ProjectDetailsAction.init({id: $event.id, kodMutav: $event.kodMutavBeShovar, misparProyectSagur: $event.misparProyectSagur}))

  }

  changeProjectListLenght($event: number) {
    this.store$.dispatch(ShofarActions.setProjectListLenght({projectListLenght:$event}));
  }

  console($event: any) {
    console.log('CLICK IN ROW MENU');
  }
}
