import {createAction, createReducer, on} from "@ngrx/store";
import { WagerInterface } from "../models/wager.model";
import * as AppState from '../../state/app.state'

export interface State extends AppState.State {
  wagers: WagerState;
}

export interface WagerState {
  wagers: {
    loading: boolean;
    error: any;
    wager: WagerInterface[] | null;
  };
  games: string[];
  entities: {[key: string]: any};
}

export const wagerReducer = createReducer(
  {  showGames:[
      {
      date: '',
      team1: '',
      team2: '',
      time: ''
    }
    ]},
  on(createAction('[Wager] Load Wagers'), state => {
    console.log('original state: '+ JSON.stringify(state));
    return {
      ...state,
      showGames : [{
        date: '2012-10-23',
        team1: 'Manchester City',
        team2: 'Manchester City',
        time: '15h00'
      }]
    }
  })
)

