import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from '@abacritt/angularx-social-login';
import { take } from 'rxjs/operators';
import {SocialUser} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  loggedIn = false;

  constructor(
    private router: Router,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user:SocialUser) => {
      this.user = user;
      this.loggedIn = !!user;
      console.log('User:', this.user);
      this.goToPlatform();
    });
  }

  async signInWithGoogle(): Promise<void> {
    try {
      const user = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      console.log('Google login:', user);
      if (user) {
        this.loggedIn = true;
        this.router.navigateByUrl('/platform/dashboard');
        await this.getUserDetails();
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  async getUserDetails(): Promise<void> {
    try {
      const user = await this.authService.authState.pipe(take(1)).toPromise();
      if (user) {
        this.user = user;
      }
    } catch (error) {
      console.error('Error getting user details:', error);
    }
  }

  signInWithFacebook(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  public goToPlatform(): void {
    if (this.loggedIn) {
      this.router.navigate(['/platform']);
    }
  }
}
