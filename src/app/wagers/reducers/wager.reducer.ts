import { createFeatureSelector, createSelector} from "@ngrx/store";
import { WagerInterface } from "../models/wager.model";
import * as WagerActions from '../actions/wager.actions'
import {ActionTypes} from "../actions/wager.actions";
export interface AppState {
  loaded: boolean;
  wagerData: {
    loading: boolean;
    error: any;
    wager: WagerInterface[] | null;
  };
  ids: string[];
  entities: {[key: string]: any};
}

export const initialState: AppState = {
  ids: [],
  entities: [],
  loaded: false,
  wagerData: {
    loading: false,
    error: null,
    wager: []
  }
};

export function WagerReducer(state = initialState, action: WagerActions.Actions): AppState {
  if (!state || !state.wagerData) {
    return state;
  }
  switch (action.type) {
    case WagerActions.loadWagers.type: {
      return {
        ...state,
        wagerData: {
          ...state.wagerData,
          loading: true,
          error: null
        }
      };
    }

    case WagerActions.loadWagersSuccess.type: {
      return {
        ...state,
        wagerData: {
          ...state.wagerData,
          loading: false,
          wager: action.payload.games
        },
      };
    }

    case WagerActions.loadWagersFailed.type: {

      return {
        ...state,
        wagerData: {
          ...state.wagerData,
          loading: false,
          error: action.payload.error
        }
      };
    }
    default:
      return state;
  }
}
/////////////////////////////////////////////////////////////////////////
//  Selectors                                                          //
/////////////////////////////////////////////////////////////////////////
export const getWagerState = createFeatureSelector<AppState>('wager');

export const getEntityState = createSelector(
  getWagerState,
  (state: AppState) => state.entities
);

export const getWagerData = createSelector(
  getWagerState,
  (state: AppState) => {
    return state && state.wagerData && state.wagerData.wager ? state.wagerData.wager : [];
  }
);

export const getWagerDataSelected = (key: string) =>
  createSelector(getEntityState, (entities) => entities[key]);
