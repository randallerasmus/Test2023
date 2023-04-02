import {createAction, createFeatureSelector, createReducer, createSelector, on} from "@ngrx/store";
import { WagerInterface } from "../models/wager.model";
import * as WagerActions from '../actions/wager.actions'
import {ActionTypes} from "../actions/wager.actions";
import {state} from "@angular/animations";
// export interface AppState {
//
//   wagers: {
//     loading: boolean;
//     error: any;
//     wager: WagerInterface[] | null;
//   };
//   ids: string[];
//   entities: {[key: string]: any};
// }
//
// export const initialState: AppState = {
//   ids: [],
//   entities: [],
//   showGames: {
//     date: any,
//     team1: any,
//     team2: any,
//     time: any
//   }
// };

export const wagerReducer = createReducer(
  {  showGames:[
      {
      date: '',
      team1: '',
      team2: '',
      time: ''
}
    ]

    },
  on(createAction('[Wager] Load Wagers'), state => {
    console.log('original state: '+ JSON.stringify(state));
    return {
      ...state,
      showGames : []
    }
  })
)

