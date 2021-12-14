import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProjectsListPageEffects } from './projects-list-page.effects';

describe('ProjectsListPageEffects', () => {
  let actions$: Observable<any>;
  let effects: ProjectsListPageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProjectsListPageEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ProjectsListPageEffects>(ProjectsListPageEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
