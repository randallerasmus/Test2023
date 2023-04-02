import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
// import { WagerEffects } from './effects/wager.effects';
import {StoreModule} from "@ngrx/store";

import {WagerService} from "./services/wager.service";
import {WagersComponent} from "./wagers.component";
import {wagerReducer} from "./reducers/wager.reducer";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatTabsModule} from "@angular/material/tabs";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {HttpClientModule} from "@angular/common/http";
import {MatSelectModule} from "@angular/material/select";



@NgModule({
  declarations: [WagersComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature('showGames', wagerReducer),
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDividerModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  providers: [
    WagerService
  ],
  exports: [

  ]
})
export class WagerModule { }
