import { Actions, ActionTypes } from '../actions/wager.actions';
import {createFeatureSelector, createSelector} from "@ngrx/store";

export interface WagerState {
  ids: string[];
  wagerEvent: any;
  wagerAmount: any;
  wagerOutcome: any;
  wagerPlacedBy: any;
  wagerDatePlaced: any;
  wagerAcceptedBy: any;
  wagerDateAccepted: any;
  [key: string]: any;
}

export const initialState: WagerState = {
  ids: [],
  wagerEvent: null,
  wagerAmount: null,
  wagerOutcome: null,
  wagerPlacedBy: null,
  wagerDatePlaced: null,
  wagerAcceptedBy: null,
  wagerDateAccepted: null,
};

export function WagerReducer(
  state: WagerState = initialState,
  action: Actions
): WagerState {
  switch (action.type) {
    case ActionTypes.CREATE_WAGER:
      return {
        ...state,
      };
    case ActionTypes.CREATE_WAGER_SUCCESS:
      return {
        ...state,
        ids: state.ids.concat(action.payload.id),
        wagerEvent: action.payload.wagerEvent,
        wagerAmount: action.payload.wagerAmount,
        wagerOutcome: action.payload.wagerOutcome,
        wagerPlacedBy: action.payload.wagerPlacedBy,
        wagerDatePlaced: action.payload.wagerDatePlaced,
        wagerAcceptedBy: action.payload.wagerAcceptedBy,
        wagerDateAccepted: action.payload.wagerDateAccepted,
      };
    default:
      return state;
  }
}
/////////////////////////////////////////////////////////////////////////
//  Selectors                                                          //
/////////////////////////////////////////////////////////////////////////
export const getWagerState =
  createFeatureSelector<WagerState>('global-wager-state');

export const getEntityState = createSelector(
  getWagerState,
  (state: WagerState) => state
);

export const getWagerData = (key: string) =>
  createSelector(getEntityState, (state) => state[key]);
