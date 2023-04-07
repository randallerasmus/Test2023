import { createReducer, createSelector, on } from "@ngrx/store";
import { AppState } from "../../state/app.state"; // import AppState interface
import * as GameSearchActions from '../actions/wager.actions';

export interface GameSearchState {
  query: string;
  loading: boolean;
  games: any[];
  error: string;
}

export const initialState: GameSearchState = {
  query: '',
  loading: false,
  games: [],
  error: ''
};

export const wagerReducer = createReducer(
  initialState,
  on(GameSearchActions.setSearchQuery, (state, { query }) => ({ ...state, query })),
  on(GameSearchActions.searchGames, (state) => ({ ...state, loading: true })),
  on(GameSearchActions.searchGamesSuccess, (state, { response }) => ({ ...state, loading: false, response })),
  on(GameSearchActions.searchGamesFailure, (state, { error }) => ({ ...state, loading: false, error }))
);

export const selectGameSearchQuery = createSelector(
  (state: AppState) => state.gameSearch,
  (gameSearch) => gameSearch
);
