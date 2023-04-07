import { createAction, props } from '@ngrx/store';
import { Game } from "../../state/app.state";

export const setSearchQuery = createAction('[Game Search] Set Search Query', props<{ query: string }>());
export const searchGames = createAction('[Game Search] Search Games', props<{ query: string }>());
export const searchGamesSuccess = createAction('[Game Search] Search Games Success', props<{ response: any[] }>());
export const searchGamesFailure = createAction('[Game Search] Search Games Failure', props<{ error: string }>());
