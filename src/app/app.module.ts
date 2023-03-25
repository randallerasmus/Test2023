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
import {HttpClientModule} from "@angular/common/http";
import { InboxComponent } from './inbox/inbox.component';
import {StoreModule} from "@ngrx/store";
import { RegisterComponent } from './register/register.component';

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
    InboxComponent,
    RegisterComponent,

  ],
  imports: [
    StoreModule.forRoot(),
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
    HttpClientModule,
    ReactiveFormsModule,
    MatSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
