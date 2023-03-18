import { Injectable, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Game} from "../models/game.model";

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://sportscore1.p.rapidapi.com/sports';

  constructor(private http: HttpClient) {}

  getLiveGames(): Observable<Game[]> {
    console.log('live sports', this.apiUrl)
    return this.http.get<Game[]>(this.apiUrl);
  }
}
