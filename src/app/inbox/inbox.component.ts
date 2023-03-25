import { Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit{
  @ViewChild('drawer', { static: true })
  drawer!: MatSidenav;
  mailbox = {
    inbox: 10,
    sent: 5,
    draft: 3,
    spam: 1,
    trash: 0
  };

  showReplyBox: boolean = false;

  ngOnInit() {
  this.drawer.toggle();
  }

  // Define the variable to store the selected message
  selectedMessage: any;

  // Define the function to open a message
  openMessage(message: any) {
    this.selectedMessage = message;
  }
}
