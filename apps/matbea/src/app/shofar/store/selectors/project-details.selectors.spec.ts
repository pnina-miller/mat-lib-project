import { ProjectDetailsEntity } from '../state/project-details.state';
import {
  State,
  projectDetailsAdapter,
  initialState,
} from '../reducers/project-details.reducer';
import * as ProjectDetailsSelectors from './project-details.selectors';

describe('ProjectDetails Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getProjectDetailsId = (it) => it['id'];
  const createProjectDetailsEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ProjectDetailsEntity);

  let state;

  beforeEach(() => {
    state = {
      projectDetails: projectDetailsAdapter.setAll(
        [
          createProjectDetailsEntity('PRODUCT-AAA'),
          createProjectDetailsEntity('PRODUCT-BBB'),
          createProjectDetailsEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('ProjectDetails Selectors', () => {
    it('getAllProjectDetails() should return the list of ProjectDetails', () => {
      const results = ProjectDetailsSelectors.getAllProjectDetails(state);
      const selId = getProjectDetailsId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ProjectDetailsSelectors.getSelected(state);
      const selId = getProjectDetailsId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getProjectDetailsLoaded() should return the current 'loaded' status", () => {
      const result = ProjectDetailsSelectors.getProjectDetailsLoaded(state);

      expect(result).toBe(true);
    });

    it("getProjectDetailsError() should return the current 'error' state", () => {
      const result = ProjectDetailsSelectors.getProjectDetailsError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
