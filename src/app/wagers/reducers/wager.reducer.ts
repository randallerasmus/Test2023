import {Actions, ActionTypes, LoadWagersSuccess, LoadWagersFailed, LoadWagers} from '../actions/wager.actions';
import {Action, createFeatureSelector, createSelector} from "@ngrx/store";
import {Game} from "../models/game.model";



export interface AppState {
  loaded: boolean;
  wagerData: {
    loading: boolean;
    error: any;
    games: Game[] | null;
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
    games: []
  }
};

export function WagerReducer(state = initialState, action:  LoadWagers | LoadWagersSuccess | LoadWagersFailed): AppState {
  if (!state || !state.wagerData) {
    return state;
  }
  switch (action.type) {
    case ActionTypes.LOAD_WAGERS: {
      console.log('LOAD_WAGERS action is being called');
      return {
        ...state,
        wagerData: {
          ...state.wagerData,
          loading: true,
          error: null
        }
      };
    }

    case ActionTypes.LOAD_WAGERS_SUCCESS: {
      console.log('Reducer games:', (action as LoadWagersSuccess).payload.games);
      return {
        ...state,
        wagerData: {
          ...state.wagerData,
          loading: false,
          games: (action as LoadWagersSuccess).payload.games
        },
        loaded: true,
         ids:
          state.ids?.indexOf('wagerResponse') < 0
            ? [...state.ids, 'wagerResponse']
            : state.ids,
        entities: Object.assign({}, state.entities, {
          ['wagerResponse']: action.payload,
        }),
      };
    }

    case ActionTypes.LOAD_WAGERS_FAILED: {
      console.log('LOAD_WAGERS_FAILED action is being called');
      return {
        ...state,
        wagerData: {
          ...state.wagerData,
          loading: false,
          error: (action as LoadWagersFailed).payload.error
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
    console.log("Wager data selector: ", state && state.wagerData && state.wagerData.games ? state.wagerData.games : []);
    return state && state.wagerData && state.wagerData.games ? state.wagerData.games : [];
  }
);

export const getWagerDataSelected = (key: string) =>
  createSelector(getEntityState, (entities) => entities[key]);
