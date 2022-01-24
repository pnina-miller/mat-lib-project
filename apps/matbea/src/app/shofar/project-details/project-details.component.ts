;
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../store/state/shofar.state';
import * as ShofarSelectors from '../store/selectors/shofar.selectors';
import {StateProjectDetails} from "../store/state/project-details.state";
import * as ProjectDetailsSelectors from '../store/selectors/project-details.selectors';
import * as ProjectDetailsActions from '../store/actions/project-details.actions';

@Component({
  selector: 'pdesks-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  id: any;
  misparProyectSagur: number;
  kodMutavBeShovar: number;

  projectsList$ = this.store$.select(ShofarSelectors.getProjectsWithFilter);
  project$ = this.storeProjectDetails$.select(ProjectDetailsSelectors.getProject);
  steps: { name: string, routTo: string }[] = [];


  constructor(private route: ActivatedRoute, private store$: Store<State>, private storeProjectDetails$: Store<StateProjectDetails>) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'))
      this.id = params.get('id');
      this.misparProyectSagur = this.id.split('&')[0];
      this.kodMutavBeShovar = this.id.split('&')[1];
      this.steps.push({name: 'רשימת פרויקטים', routTo: 'table'}, {name: 'היילין מתחם הבורסה', routTo: ''})
      this.project$.subscribe((project) => {
        if(project){
          this.misparProyectSagur=project.misparProyectSagur;
          this.kodMutavBeShovar= project.kodMutavBeShovar;
        } else {
          this.storeProjectDetails$.dispatch(ProjectDetailsActions.init({id:this.id, kodMutav:this.kodMutavBeShovar, misparProyectSagur:this.misparProyectSagur}))
        }
          console.log('Project from store', project);
        },
        () => {
          console.log("Project Error");
        }
      )
      this.projectsList$.subscribe(
        (projectsList) => {

          let selectedProject = projectsList?.filter((project) => project.misparProyectSagur == this.misparProyectSagur)

          if (selectedProject?.length > 0) {
            this.kodMutavBeShovar = selectedProject[0].kodMutavBeShovar;
            this.steps[1].name=selectedProject[0].shemProyectSagur;
          }


        },
        (err) => {
          console.log("Error", err)
        },
        () => {
          console.log("Continiu")
        }
      )
    });
  }

}
