import { Injectable } from '@angular/core';
import {User} from "../model/user.model";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [];

  constructor() { }

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
  }

  updateUser(user: User | undefined): void {
    const index = this.users.findIndex(u => u.id);
    if (index !== -1) {
      // this.users[index] = user;
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
  }
}
