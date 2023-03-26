import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { LoadWagers } from './actions/wager.actions';
import { Game } from './models/game.model';
import {getWagerData, getWagerDataSelected} from './reducers/wager.reducer';
import { WagerService } from './services/wager.service';
import { HttpClient } from '@angular/common/http';
import { WagerReducer} from "./reducers";

@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent implements OnInit {
  wagerState$: Observable<Game[]> | undefined;
  games: Game[] = [];
  selectedGame: any;
  dataSource = new BehaviorSubject<Game[]>([]);
  displayedColumns: string[] = ['date', 'team1', 'team2', 'time'];

  constructor(
    private http: HttpClient,
    private gameService: WagerService,
    private _store: Store<{ wager: { games: Game[] } }>
  ) {
    this.games = [];
  }

  ngOnInit() {
    console.log('dispatching LoadWagers');
    this._store.dispatch(new LoadWagers());

    this._store.pipe(select(getWagerData))
      .subscribe((result) => {
        this.games = result;
      });

    this._store
      .pipe(
        select(
          WagerReducer.getWagerDataSelected(
            'wagerResponse'
          )
        )
      )
      .subscribe((result) => {
        if (result) {
          this.games = result;
        }
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


  onGameSelect(game: Game) {
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
