import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent implements OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.navigate(['/platform/dashboard']);
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
