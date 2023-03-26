
import {Action} from '@ngrx/store';
import {GameCollection} from "../models/game.model";

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

export class CreateWager implements Action {
  readonly type = ActionTypes.CREATE_WAGER;
  constructor(public payload: any) {
  }
}

export class CreateWagerSuccess implements Action {
  readonly type = ActionTypes.CREATE_WAGER_SUCCESS;
  constructor(public payload: any) {
  }
}

export class CreateWagerFailed implements Action {
  readonly type = ActionTypes.CREATE_WAGER_FAILED;
  constructor(public payload: any) {
  }
}

/**********************************************************************
 * Load Existing Wagers Actions
 **********************************************************************/
export class LoadWagers implements Action {
  readonly type = ActionTypes.LOAD_WAGERS;

}

export class LoadWagersSuccess implements Action {
  readonly type = ActionTypes.LOAD_WAGERS_SUCCESS;
  constructor(public payload: any) {}
}

export class LoadWagersFailed implements Action {
  readonly type = ActionTypes.LOAD_WAGERS_FAILED;
  constructor(public payload: any) {
  }
}

export type Actions =
            CreateWager | CreateWagerSuccess | CreateWagerFailed |
            LoadWagers | LoadWagersSuccess | LoadWagersFailed;

