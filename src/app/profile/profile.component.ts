import {Component, OnInit} from '@angular/core';
import {ImageService} from "../platform/services/image.service";
import {NgForm} from "@angular/forms";
import {User} from "../platform/model/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user?:User;

  constructor() { }

  ngOnInit(): void {
  }

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

}
