import { StartupEntity } from './startup.models';
import * as StartupActions from './startup.actions';
import { State, initialState, reducer } from './startup.reducer';

describe('Startup Reducer', () => {
  const createStartupEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as StartupEntity);

  beforeEach(() => {});

  describe('valid Startup actions', () => {
    it('loadStartupSuccess should return set the list of known Startup', () => {
      const startup = [
        createStartupEntity('PRODUCT-AAA'),
        createStartupEntity('PRODUCT-zzz')
      ];
      const action = StartupActions.loadStartupSuccess({ startup });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
