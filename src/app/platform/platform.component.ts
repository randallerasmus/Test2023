import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  user: any;
  loggedIn = false;
  constructor(private router: Router,
              private authService: SocialAuthService,) {}

  ngOnInit() {
    this.router.navigate(['/platform/dashboard']);
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    }

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
  logout() {
    this.router.navigate(['/login']);
  }
}
