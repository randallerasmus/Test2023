import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SocialUser} from "ngx-social-login";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  user: SocialUser | undefined;
  loggedIn: boolean | undefined;
  userInfoForm: any;
  constructor(private router: Router,
                           private fb: FormBuilder) {
  }

  ngOnInit() {
    this.userInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      surname: ['', Validators.required],
      shortName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['Male', Validators.required],
      password: ['', Validators.required],
      shortname: ['', Validators.required],
      projects: ['', Validators.required],
    });
  }
}
