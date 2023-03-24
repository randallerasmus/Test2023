import {Component, OnInit, ViewChild} from '@angular/core';
import { Message } from './models/inbox.model';
import {MatSidenav} from "@angular/material/sidenav";
import {Router} from "@angular/router";
import {SocialAuthService} from "@abacritt/angularx-social-login";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit{
  mailbox = {
    inbox: 10,
    sent: 5,
    draft: 3,
    spam: 1,
    trash: 0
  };

  ngOnInit() {
  }

  // Define the variable to store the selected message
  selectedMessage: any;

  // Define the function to open a message
  openMessage(message: any) {
    this.selectedMessage = message;
  }




}
