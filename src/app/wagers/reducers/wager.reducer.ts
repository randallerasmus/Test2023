import {createAction, createReducer, on} from "@ngrx/store";
import { WagerInterface } from "../models/wager.model";
import * as AppState from '../../state/app.state'
import *  as WagerActions from '../actions/wager.actions'

export interface State extends AppState.State {
  wagers: WagerState;
}

export interface WagerState {
  games: WagerInterface[];
  currentGame :WagerInterface[],
}

const initialState: WagerState = {
  currentGame: [],
  games:[]
}

export const wagerReducer = createReducer<WagerState>(initialState ,
  on(WagerActions.loadWagers, (state) : WagerState => {
    console.log('loadWager state: '+ JSON.stringify(state));
    return {
      ...state,
      games : []
    };
  }),
  on(WagerActions.loadWagersSuccess, (state,action) : WagerState => {
    console.log('loadWager Success state '+ JSON.stringify(state));
    return {
      ...state,
      currentGame :[{
        date: '2012-10-23',
        team1: 'Manchester City',
        team2: 'Manchester City',
        time: '15h00'
      }]
  }})
)

