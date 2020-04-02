import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromStartup from '../startup/startup.reducer';


export interface State {
  startup: fromStartup.State
}

export const reducers: ActionReducerMap<State> = {
  startup: fromStartup.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
