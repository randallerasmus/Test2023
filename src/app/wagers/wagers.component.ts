import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {getWagerEvent, WagerState} from './reducers/wager.reducer';
import { LoadWagers } from './actions/wager.actions';
import { Game } from './models/game.model';
import { getWagerData } from './reducers/wager.reducer';
import {WagerService} from "./services/wager.service";

@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent implements OnInit {
  wagerState$: Observable<any> | undefined;
  games: Game[] = [];
  selectedGame: any;

  dataSource = new BehaviorSubject<Game[]>([]);
  displayedColumns: string[] = ['name', 'date', 'location'];

  constructor(
    private gameService: WagerService,
    private _store: Store<{ wager: WagerState }>
  ) {
    this.games = [];
  }

  ngOnInit() {
    this._store.dispatch(new LoadWagers(''));
    this.wagerState$ = this._store.pipe(select(getWagerData));
    this.wagerState$.subscribe(wagerState => {
      console.log('console 1', wagerState)
      this.games = wagerState;
      console.log('console 1', wagerState)
    });

    this.gameService.getGlobalGames().subscribe(
      response => {
        console.log('console 2', response)
        this.games = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSearch(query: string) {
    if (query) {
      console.log('query data', query)
      // Filter games based on search query
      const filteredGames = this.games.filter(game =>
        game.name.toLowerCase().includes(query.toLowerCase())
      );

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
      this.displayedColumns = ['name', 'date', 'location', 'addl_info'];
      this.dataSource.next([...this.dataSource.value, this.selectedGame]);
      this.selectedGame = '';
    }
  }
}
