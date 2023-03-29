import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import {
  ActionTypes,
  loadWagers,
  loadWagersSuccess,
  loadWagersFailed
} from '../actions/wager.actions';
import { WagerService } from "../services/wager.service";
import { WagerInterface } from "../models/wager.model";
import {Action} from "@ngrx/store";

@Injectable()
export class WagerEffects {

  constructor(
    private actions$: Actions,
    private _wagerService: WagerService
  ) {}

  loadWagers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LOAD_WAGERS),
      mergeMap((action: Action) =>
        this._wagerService.getWagers().pipe(
          map((response: any) =>
            new loadWagersSuccess(action.type)
          ),
          catchError((error) => of(new loadWagersFailed( error )))
        )
      )
    )
  );
}
