import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {WagerInterface} from "../models/wager.model";


@Injectable({
  providedIn: 'root'
})
export class WagerService {
  private apiUrl = 'https://f0f4aae5-4a95-47c1-9e96-b946c4a56e1f.mock.pstmn.io/tms-users/v1/users';

  constructor(private http: HttpClient) {}

  getWagers(): Observable<WagerInterface[]> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'X-RapidAPI-Key': '308e7d235dmshd8178ac919a97a1p158811jsn2ac7376a74e6',
    //     'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //   })
    // };
    console.log('data', this.apiUrl)
    return this.http.get<WagerInterface[]>(this.apiUrl);
  }
}
