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


@Component({
  selector: 'projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.scss']
})

export class ProjectsListComponent implements OnInit {

  displayedColumns$ = this.store$.select(ShofarSelectors.getColumnDefinitions);
  dataSource$ = this.store$.select(ShofarSelectors.getProjectsWithFilter);
  displayedColumns: ColumnDefinition[];
  sub: Subscription = new Subscription();
  loadingTable$ = this.store$.select(ShofarSelectors.getLoadingTable);
  loadingTable = true;
  messages: any[];
  messages$ = this.store$.select(ShofarSelectors.getMessagesToTable);
  projectListLenght: number;


  constructor(private route: ActivatedRoute, private store$: Store<State>, private storeProjectDetails$: Store<StateProjectDetails>) {
  }

  ngOnInit(): void {

    this.sub.add(this.displayedColumns$.subscribe(
        (val) => {
          console.log('Display columns in project list component', val)
          this.displayedColumns = val;
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

  console($event: any) {debugger
    console.log('CLICK IN ROW MENU');
  }
}
