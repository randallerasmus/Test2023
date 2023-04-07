import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {of, withLatestFrom} from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as GameSearchActions from '../actions/wager.actions';
import { WagerService } from '../services/wager.service';
import {selectGameSearchQuery} from "../reducers/wager.reducer";
import {Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";

@Injectable()
export class WagerEffects {
  searchGames$ = createEffect(() => this.actions$.pipe(
    ofType(GameSearchActions.searchGames),
    withLatestFrom(this.store.select(selectGameSearchQuery)),
    switchMap(([action, query]) => this._wagerService.getWagers(query).pipe(
      map(response => GameSearchActions.searchGamesSuccess({ response })),
      catchError(error => of(GameSearchActions.searchGamesFailure({ error: error.message })))
    ))
  ));

  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private _wagerService: WagerService
  ) {}
}
