import { createAction, props, Action } from '@ngrx/store';
import {WagerInterface} from "../models/wager.model";

export enum ActionTypes {
  CREATE_WAGER = '[WagerService] Create Wager',
  CREATE_WAGER_SUCCESS = '[WagerService] Create Wager Success',
  CREATE_WAGER_FAILED = '[WagerService] Create Wager Failure',
  LOAD_WAGERS = '[WagerService] Load Wagers',
  LOAD_WAGERS_SUCCESS = '[WagerService] Load Wagers Success',
  LOAD_WAGERS_FAILED = '[WagerService] Load Wagers Failure',
}

/**********************************************************************
 * Create New Wager Actions
 **********************************************************************/

export const createWager = createAction(
  ActionTypes.CREATE_WAGER,
  props<{ payload: any }>()
);

export const createWagerSuccess = createAction(
  ActionTypes.CREATE_WAGER_SUCCESS,
  props<{ payload: any }>()
);

export const createWagerFailed = createAction(
  ActionTypes.CREATE_WAGER_FAILED,
  props<{ payload: any }>()
);

/**********************************************************************
 * Load Existing Wagers Actions
 **********************************************************************/

export const loadWagers = createAction(
  ActionTypes.LOAD_WAGERS,

);

export const loadWagersSuccess = createAction(
  ActionTypes.LOAD_WAGERS_SUCCESS,
  props<{ payload: { games: WagerInterface[] } }>()
);

export const loadWagersFailed = createAction(
  ActionTypes.LOAD_WAGERS_FAILED,
  props<{ payload: { error: any } }>()
);



