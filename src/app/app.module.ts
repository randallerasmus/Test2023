import {isDevMode, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatMenuModule} from "@angular/material/menu";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import {MatTableModule} from "@angular/material/table";
import {PlatformComponent} from "./platform/platform.component";
import {CreateUserComponent} from "./platform/create-user/create-user.component";
import { SettingsComponent } from './settings/settings.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatSelectModule} from "@angular/material/select";
import { WagersComponent } from './wagers/wagers.component';
import {HttpClientModule} from "@angular/common/http";
import { InboxComponent } from './inbox/inbox.component';
import {StoreModule} from "@ngrx/store";
import { RegisterComponent } from './register/register.component';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {WagerModule} from "./wagers/wager.module";
import {DatePipe} from "@angular/common";
// import { AlertDialogComponent } from './shared-components/alert-dialog/alert-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlatformComponent,
    DashboardComponent,
    ProfileComponent,
    CreateUserComponent,
    SettingsComponent,
    InboxComponent,
    RegisterComponent,


  ],
  imports: [
    StoreModule.forRoot({},{}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    WagerModule,
    MatCheckboxModule,
    MatMenuModule,
    MatDividerModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,

  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
