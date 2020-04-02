import { StartupEntity } from './startup.models';
import { State, startupAdapter, initialState } from './startup.reducer';
import * as StartupSelectors from './startup.selectors';

describe('Startup Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getStartupId = it => it['id'];
  const createStartupEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as StartupEntity);

  let state;

  beforeEach(() => {
    state = {
      startup: startupAdapter.addAll(
        [
          createStartupEntity('PRODUCT-AAA'),
          createStartupEntity('PRODUCT-BBB'),
          createStartupEntity('PRODUCT-CCC')
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true
        }
      )
    };
  });

  describe('Startup Selectors', () => {
    it('getAllStartup() should return the list of Startup', () => {
      const results = StartupSelectors.getAllStartup(state);
      const selId = getStartupId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = StartupSelectors.getSelected(state);
      const selId = getStartupId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getStartupLoaded() should return the current 'loaded' status", () => {
      const result = StartupSelectors.getStartupLoaded(state);

      expect(result).toBe(true);
    });

    it("getStartupError() should return the current 'error' state", () => {
      const result = StartupSelectors.getStartupError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
