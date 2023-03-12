import {Component} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent  {

  container!: HTMLElement;
  sidenav!: MatSidenav;


  constructor() {}

  ngAfterViewInit() {
    this.container = document.querySelector('.example-container')!;
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }
}
