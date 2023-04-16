import { Injectable, Optional } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {WagerInterface} from "../models/wager.model";
import {Game} from "../../state/app.state";


@Injectable({
  providedIn: 'root'
})
export class WagerService {
  private apiUrl = 'https://f0f4aae5-4a95-47c1-9e96-b946c4a56e1f.mock.pstmn.io/tms-users/v1/users';
  private soccerGames = 'https://oscore.opera-api.com/q/tournament_events';

  constructor(private http: HttpClient) {}

  getWagers(query: any): Observable<Game[]> {
    const url = `${this.apiUrl}/wagers?query=${query}`;
    return this.http.get<Game[]>(url);
  }
  getGames(query: any) {
    const url = `${this.soccerGames}?tournament_id=${query}`;
    return this.http.get<any>(url);
  }
}
