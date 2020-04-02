import { createAction, props } from '@ngrx/store';
import { StartupEntity } from './startup.models';

export const loadStartup = createAction('[Startup] Load Startup');

export const loadStartupSuccess = createAction(
  '[Startup] Load Startup Success',
  props<{ startup: StartupEntity[] }>()
);

export const loadStartupFailure = createAction(
  '[Startup] Load Startup Failure',
  props<{ error: any }>()
);
