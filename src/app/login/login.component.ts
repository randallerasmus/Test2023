import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, Account, ID } from "appwrite";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;

  loginForm: FormGroup | any;
  constructor(private formBuilder: FormBuilder, private store: Store, private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  public handleSignIn(): void {
    console.log(' login here')
    let payload = {
      email : this.loginForm?.value.email,
      password: this.loginForm?.value.password
    }

    const client = new Client();
    const account = new Account(client);

    client
      .setEndpoint('http://localhost/v1/account/sessions/email') // Your API Endpoint
      .setProject('641e255ae3b55c785351') // Your project ID
    ;

    const promise = account.createEmailSession(payload.email, payload.password);

    promise.then((response) => {
      this.router.navigate(['/platform']);
      console.log(response); // Success
    }, function (error) {
      console.log(error); // Failure
      alert('Your details does not match our records'+ error)
    });

  }

  registration() {
    this.router.navigate(['/register']);
  }
}
