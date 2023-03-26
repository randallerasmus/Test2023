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
import {Game} from "../models/game.model";

@Injectable()
export class WagerEffects {

  constructor(private actions$: Actions,
              private _wagerService: WagerService  ) {}

  loadAdditionalCodeEntries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LOAD_WAGERS),
      mergeMap((action: LoadWagers) =>
        this._wagerService
          .getWagers()
          .pipe(
            map(
              (response: Game[]) =>
                new LoadWagersSuccess(response)
            ),
            catchError((error) => of(new LoadWagersFailed(error)))
          )
      )
    )
  );
}
