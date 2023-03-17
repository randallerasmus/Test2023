import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
    SocialAuthService, SocialUser
} from '@abacritt/angularx-social-login';
import {take} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: SocialUser | null = null;
  loggedIn: boolean | null = null;

  constructor(private router: Router, private authService: SocialAuthService) {}

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
  }

  goToPlatform(): void {
    this.router.navigate(['/platform']);
  }

  async signInWithGoogle(): Promise<void> {
    console.log('1')
    try {
      console.log('2')

      const user = await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
      console.log('google login', user);
      if (user) {
        console.log('3')

        this.loggedIn = true; // set the loggedIn flag to true
         console.log('4')

        this.router.navigateByUrl('/platform/dashboard');
        console.log('5')

        this.getUserDetails(); // Call the method to retrieve user details.
        console.log('6')

      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  }

  async getUserDetails(): Promise<void> {
    try {
      console.log('7')

      const user = await this.authService.authState.pipe(take(1)).toPromise();
      if (user != null) {
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
}
