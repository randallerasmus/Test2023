import {Component} from '@angular/core';


@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.css']
})
export class PlatformComponent  {

  users = [
    { name: 'John Doe', email: 'john@example.com', role: 'admin' },
    { name: 'Jane Doe', email: 'jane@example.com', role: 'user' },
    { name: 'Bob Smith', email: 'bob@example.com', role: 'user' }
  ];

}
