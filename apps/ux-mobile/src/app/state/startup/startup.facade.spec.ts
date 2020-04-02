import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { StartupEntity } from './startup.models';
import { StartupEffects } from './startup.effects';
import { StartupFacade } from './startup.facade';

import * as StartupSelectors from './startup.selectors';
import * as StartupActions from './startup.actions';
import {
  STARTUP_FEATURE_KEY,
  State,
  initialState,
  reducer
} from './startup.reducer';

interface TestSchema {
  startup: State;
}

describe('StartupFacade', () => {
  let facade: StartupFacade;
  let store: Store<TestSchema>;
  const createStartupEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`
    } as StartupEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(STARTUP_FEATURE_KEY, reducer),
          EffectsModule.forFeature([StartupEffects])
        ],
        providers: [StartupFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(StartupFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allStartup$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(StartupActions.loadStartup());

        list = await readFirst(facade.allStartup$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadStartupSuccess` to manually update list
     */
    it('allStartup$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allStartup$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          StartupActions.loadStartupSuccess({
            startup: [createStartupEntity('AAA'), createStartupEntity('BBB')]
          })
        );

        list = await readFirst(facade.allStartup$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
