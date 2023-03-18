import { NgModule } from '@angular/core';
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
import {
  FacebookLoginProvider,
  GoogleLoginProvider, GoogleSigninButtonModule,
  SocialAuthServiceConfig,
  SocialLoginModule
} from "@abacritt/angularx-social-login";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PlatformComponent,
    DashboardComponent,
    ProfileComponent,
    CreateUserComponent,
    SettingsComponent,
    WagersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
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
    SocialLoginModule,
    ReactiveFormsModule,
    MatSelectModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '892351818219-uimfqju00t6c2q3q1627805krlet3fj6.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
