import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  UserName: string = 'JOE BIDEN';

  constructor() {
    this.firstName = '';
    this.lastName = '';
    this.email = '';
    this.phone = '';
    this.address = '';
    this.city = '';
  }

  saveProfile() {
    // Handle save profile logic here
  }
}
