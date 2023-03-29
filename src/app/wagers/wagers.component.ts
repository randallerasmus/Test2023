import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {getWagerData } from './reducers/wager.reducer';
import { WagerService } from './services/wager.service';
import { HttpClient } from '@angular/common/http';
import {loadWagers} from "./actions/wager.actions";
import {WagerInterface} from "./models/wager.model";

@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent implements OnInit {
  wagerState$: Observable<WagerInterface[]> | undefined;
  games: WagerInterface[] = [];
  selectedGame: any;
  dataSource = new BehaviorSubject<WagerInterface[]>([]);
  displayedColumns: string[] = ['date', 'team1', 'team2', 'time'];

  constructor(
    private http: HttpClient,
    private gameService: WagerService,
    private _store: Store) {
    this.games = [];
  }

  ngOnInit() {
    console.log('dispatching LoadWagers');
    this._store.dispatch(loadWagers());

    this._store.pipe(select(getWagerData))
      .subscribe((result) => {
        this.games = result;
      });

    // this.gameService.getWagers().subscribe(
    //   response => {
    //     console.log('console 2', response)
    //     this.games = response;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  onSearch(query: string) {
    if (query) {
      // Filter games based on search query
      const filteredGames = this.games.filter(game => {
        return game.team1.toLowerCase().includes(query.toLowerCase());
      });

      // Update the component's games array with the filtered games
      this.dataSource.next(filteredGames);
    } else {
      this.dataSource.next([]);
    }
  }


  onGameSelect(game: WagerInterface) {
    this.selectedGame = game;
  }

  addGame() {
    if (this.selectedGame) {
      this.displayedColumns = ['date', 'team1', 'team2', 'time'];
      this.dataSource.next([...this.dataSource.value, this.selectedGame]);
      this.selectedGame = '';
    }
  }
}
