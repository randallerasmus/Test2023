import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {SocialAuthService, SocialUser} from "@abacritt/angularx-social-login";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  user: SocialUser | undefined;
  loggedIn: boolean | undefined;
  userInfoForm: FormGroup;
  constructor(private router: Router,
              private authService: SocialAuthService,
              private fb: FormBuilder) {
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

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });

    this.userInfoForm.get('firstName')?.setValue(this.user?.firstName)
    this.userInfoForm.get('surname')?.setValue(this.user?.lastName)
    this.userInfoForm.get('email')?.setValue(this.user?.email)
  }
}
