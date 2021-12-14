import { StateProjectDetails } from '../state/project-details.state';
import * as ProjectDetailsActions from '../actions/project-details.actions';
import {  initialState, reducer } from './project-details.reducer';

describe('ProjectDetails Reducer', () => {
  const createProjectDetailsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as StateProjectDetails);

  beforeEach(() => {});


});
//---------------
describe('User Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
