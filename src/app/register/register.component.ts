import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Store} from "@ngrx/store";

import { Client, Account, ID } from 'appwrite';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  public signupForm: FormGroup | any ;
  constructor(private router: Router,
  private formBuilder: FormBuilder, private store: Store) {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  handleSignup() {
    const client = new Client();
    client
      .setEndpoint('http://localhost/v1') // Your Appwrite Endpoint
      .setProject('')
    ;
    console.log('Signing up');
    const account = new Account(client)

    let payload = {
      email : this.signupForm.value.email,
      password: this.signupForm.value.password,
      name: this.signupForm.value.name
    }
    account.create(ID.unique(),payload.email,payload.password,payload.name)
      .then(response => {
            if(response) {
             this.goToDashboard();
            }
    }, error => {
      console.log(error);
    });

    client.subscribe('files', response => {
      if(response.events.includes('buckets.*.files.*.create')) {

        console.log(response.payload);
      }
    });
  }

  goToDashboard(){
    this.router.navigate(['platform/dashboard'])
  }

  cancel() {
    this.router.navigate(['/login']);  }
}
