import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SoccerService {

  private apiUrl = 'https://api-football-v1.p.rapidapi.com/v3/timezone';

  constructor(private http: HttpClient) { }

  getLiveMatches(query: string) {
    const url = `${this.apiUrl}fixtures/live`;
    const headers = {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': '308e7d235dmshd8178ac919a97a1p158811jsn2ac7376a74e6' // replace with your RapidAPI key
    };
    const params = {
      league: query // the search query
    };
    return this.http.get(url, { headers, params });
  }
}
