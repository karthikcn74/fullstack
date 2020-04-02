import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as StartupActions from './startup.actions';
import { StartupEntity } from './startup.models';

export const STARTUP_FEATURE_KEY = 'startup';

export interface State extends EntityState<StartupEntity> {
  selectedId?: string | number; // which Startup record has been selected
  loaded: boolean; // has the Startup list been loaded
  error?: string | null; // last none error (if any)
}

export interface StartupPartialState {
  readonly [STARTUP_FEATURE_KEY]: State;
}

export const startupAdapter: EntityAdapter<StartupEntity> = createEntityAdapter<
  StartupEntity
>();

export const initialState: State = startupAdapter.getInitialState({
  // set initial required properties
  loaded: false
});

const startupReducer = createReducer(
  initialState,
  on(StartupActions.loadStartup, state => ({
    ...state,
    loaded: false,
    error: null
  })),
  on(StartupActions.loadStartupSuccess, (state, { startup }) =>
    startupAdapter.addAll(startup, { ...state, loaded: true })
  ),
  on(StartupActions.loadStartupFailure, (state, { error }) => ({
    ...state,
    error
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return startupReducer(state, action);
}
