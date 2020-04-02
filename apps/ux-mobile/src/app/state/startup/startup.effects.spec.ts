import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { StartupEffects } from './startup.effects';
import * as StartupActions from './startup.actions';

describe('StartupEffects', () => {
  let actions: Observable<any>;
  let effects: StartupEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        StartupEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.get(StartupEffects);
  });

  describe('loadStartup$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: StartupActions.loadStartup() });

      const expected = hot('-a-|', {
        a: StartupActions.loadStartupSuccess({ startup: [] })
      });

      expect(effects.loadStartup$).toBeObservable(expected);
    });
  });
});
