import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PlatformComponent} from "./platform/platform.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CreateUserComponent} from "./platform/create-user/create-user.component";
import {ProfileComponent} from "./profile/profile.component";
import {SettingsComponent} from "./settings/settings.component";
import {WagersComponent} from "./wagers/wagers.component";
import {InboxComponent} from "./inbox/inbox.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'platform', component: PlatformComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: CreateUserComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'wagers', component: WagersComponent },
      { path: 'inbox', component: InboxComponent },
      { path: 'settings', component: SettingsComponent },
    ]},
  { path: 'inbox', component: InboxComponent,
    children: [
      { path: 'Inbox', component: DashboardComponent },
      { path: 'Drafts', component: CreateUserComponent },
      { path: 'Sent Items', component: ProfileComponent },
      { path: 'Deleted Items', component: WagersComponent },
    ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
