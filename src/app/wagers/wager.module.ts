import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { WagerEffects } from './effects/wager.effects';
import {StoreModule} from "@ngrx/store";

import {WagerService} from "./services/wager.service";
import {WagersComponent} from "./wagers.component";
import {WagerReducer} from "./reducers/wager.reducer";



@NgModule({
  declarations: [WagersComponent],
  imports: [
    CommonModule,

    StoreModule.forFeature('wager', WagerReducer),
    EffectsModule.forFeature([WagerEffects])
  ],
  providers: [
    WagerService
  ],
  exports: [
    WagersComponent
  ]
})
export class WagerModule { }
