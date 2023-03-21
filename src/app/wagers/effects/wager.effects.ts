import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  ActionTypes,
  CreateWager,
  CreateWagerSuccess,
  CreateWagerFailed,
  LoadWagers,
  LoadWagersSuccess,
  LoadWagersFailed
} from '../actions/wager.actions';
import {WagerService} from "../services/wager.service";

@Injectable()
export class WagerEffects {

  constructor(private actions$: Actions,
              private _wagerService: WagerService  ) {}


  createWager$ = createEffect(() => this.actions$.pipe(
    ofType<CreateWager>(ActionTypes.CREATE_WAGER),
    mergeMap(action  => {
      // Your code to create the wager and fetch the response from the API or some other source
        this._wagerService.getGlobalGames();
      const response = { id: '1', wagerEvent: 'event', wagerAmount: 10, wagerOutcome: 'outcome', wagerPlacedBy: 'user1', wagerDatePlaced: new Date() };

      return of(new CreateWagerSuccess({ response }));
    }),
    catchError(error => of(new CreateWagerFailed({ error })))
  ));

  loadWagers$ = createEffect(() => this.actions$.pipe(
    ofType<LoadWagers>(ActionTypes.LOAD_WAGERS),
    mergeMap(() => {
      // Your code to fetch the wagers data from the API or some other source
      // const wagers = [/* ... */];

      return of(new LoadWagersSuccess({  }));
    }),
    catchError(error => of(new LoadWagersFailed({ error })))
  ));
}
