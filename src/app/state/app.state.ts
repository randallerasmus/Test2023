import {WagerState} from "../wagers/reducers/wager.reducer";

// this is the feature slices of my state in my application
export interface State {
  wagerState: WagerState,
  userState: any;
  mailState:any;
}
