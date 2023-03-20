import { createAction, props } from '@ngrx/store';

export const actionWagers = createAction('[Wager] Action Wagers');

export const actionWagersSuccess = createAction(
  '[Wager] Action Wagers Success',
  props<{ data: any }>()
);

export const actionWagersFailure = createAction(
  '[Wager] Action Wagers Failure',
  props<{ error: any }>()
);
