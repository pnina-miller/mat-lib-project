import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ProjectDetailsEffects } from './project-details.effects';
import * as ProjectDetailsActions from '../actions/project-details.actions';

describe('ProjectDetailsEffects', () => {
  let actions: Observable<any>;
  let effects: ProjectDetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ProjectDetailsEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ProjectDetailsEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ProjectDetailsActions.init() });

      const expected = hot('-a-|', {
        a: ProjectDetailsActions.loadProjectDetailsSuccess({
          projectDetails: [],
        }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
