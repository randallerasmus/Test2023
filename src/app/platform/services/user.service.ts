// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
//
// import { User } from '../model/user.model';
//
// @Injectable({
//   providedIn: 'root'
// })
//
// export class UserService {
//   private usersUrl = '/api/users';
//
//   constructor(private http: HttpClient) {}
//
//   // Define the methods for CRUD operations
//
//   createUser(user: User): Observable<User> {
//     return this.http.post<User>(this.usersUrl, user);
//   }
//
//   updateUser(user: number): Observable<User> {
//     const url = `${this.usersUrl}/${user}`;
//     return this.http.put<User>(url, user);
//   }
//
//   deleteUser(id: number): Observable<void> {
//     const url = `${this.usersUrl}/${id}`;
//     return this.http.delete<void>(url);
//   }
//
//   getUsers(): Observable<User[]> {
//     return this.http.get<User[]>(this.usersUrl);
//   }
//
// }
