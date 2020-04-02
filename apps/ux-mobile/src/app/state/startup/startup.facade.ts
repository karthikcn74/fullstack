import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as fromStartup from './startup.reducer';
import * as StartupSelectors from './startup.selectors';

@Injectable()
export class StartupFacade {
  loaded$ = this.store.pipe(select(StartupSelectors.getStartupLoaded));
  allStartup$ = this.store.pipe(select(StartupSelectors.getAllStartup));
  selectedStartup$ = this.store.pipe(select(StartupSelectors.getSelected));

  constructor(private store: Store<fromStartup.StartupPartialState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
