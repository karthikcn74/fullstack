import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  STARTUP_FEATURE_KEY,
  State,
  StartupPartialState,
  startupAdapter
} from './startup.reducer';

// Lookup the 'Startup' feature state managed by NgRx
export const getStartupState = createFeatureSelector<
  StartupPartialState,
  State
>(STARTUP_FEATURE_KEY);

const { selectAll, selectEntities } = startupAdapter.getSelectors();

export const getStartupLoaded = createSelector(
  getStartupState,
  (state: State) => state.loaded
);

export const getStartupError = createSelector(
  getStartupState,
  (state: State) => state.error
);

export const getAllStartup = createSelector(getStartupState, (state: State) =>
  selectAll(state)
);

export const getStartupEntities = createSelector(
  getStartupState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getStartupState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getStartupEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
