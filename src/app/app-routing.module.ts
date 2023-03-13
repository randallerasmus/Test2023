import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {PlatformComponent} from "./platform/platform.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CreateUserComponent} from "./platform/create-user/create-user.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'platform', component: PlatformComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'users', component: CreateUserComponent },
      { path: 'profile', component: ProfileComponent },
      // { path: 'products', component: ProductsComponent },
      // { path: 'settings', component: SettingsComponent },
    ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
