import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { WagerEffects } from './effects/wager.effects';
import {StoreModule} from "@ngrx/store";
import {WagerReducer} from "./reducers/wager.reducer";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    StoreModule.forFeature('global-wager-state', WagerReducer),
    EffectsModule.forFeature([WagerEffects])
  ]
})
export class WagerModule { }
