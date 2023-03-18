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

  user: any;
  selectedMessage: any;
  constructor() {}

  ngOnInit() {

  }
  messages: Message[] = [
    {
      id: 1,
      sender: 'John Doe',
      subject: 'Hello',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      timestamp: new Date(),
      isRead: true,
      isStarred: false
    },
    {
      id: 2,
      sender: 'Jane Smith',
      subject: 'Meeting Reminder',
      body: 'Just a reminder that we have a meeting tomorrow at 2pm.',
      timestamp: new Date(),
      isRead: true,
      isStarred: false
    },
    {
      id: 3,
      sender: 'Bob Johnson',
      subject: 'Project Update',
      body: 'Here is an update on the progress of the project.',
      timestamp: new Date(),
      isRead: true,
      isStarred: false
    }
  ];
  onSelect(message: Message): void {
    this.selectedMessage = message;
  }



}
