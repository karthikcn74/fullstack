import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromStartup from './startup.reducer';
import * as StartupActions from './startup.actions';
import { StartupService } from '../../services/startup.service';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class StartupEffects {
  loadStartup$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StartupActions.loadStartup),
      mergeMap(() => this.startupService.getStartup().pipe(
        map((startup) => ({type: '[Startup] Load Startup Success', startup})),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(private actions$: Actions, private startupService: StartupService) {}
}
