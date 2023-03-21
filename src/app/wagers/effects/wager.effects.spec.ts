import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { WagerEffects } from './wager.effects';

describe('WagerEffects', () => {
  let actions$: Observable<any>;
  let effects: WagerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        WagerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(WagerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
