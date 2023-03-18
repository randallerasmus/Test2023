import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from "../models/game.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getLiveGames(): Observable<Game[]> {
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'X-RapidAPI-Key': '308e7d235dmshd8178ac919a97a1p158811jsn2ac7376a74e6',
    //     'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    //   })
    // };

    return this.http.get<Game[]>(this.apiUrl);
  }
}
