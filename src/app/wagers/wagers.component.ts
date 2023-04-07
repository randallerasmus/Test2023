import {Component, OnDestroy, OnInit} from '@angular/core';
import {BehaviorSubject, Observable, Subscription} from 'rxjs';
import { Store } from '@ngrx/store';
import { WagerService } from './services/wager.service';
import { HttpClient } from '@angular/common/http';
import {WagerInterface} from "./models/wager.model";
import {State} from "./reducers/wager.reducer";
import *  as WagerActions from '../wagers/actions/wager.actions'


@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent implements OnInit, OnDestroy {
  wagerState$: Observable<WagerInterface[]> | undefined;
  games: WagerInterface[] = [];
  selectedGame: any;

  dataSource = new BehaviorSubject<WagerInterface[]>([]);
  displayedColumns: string[] = ['date', 'team1', 'team2', 'time'];
  protected _subscriptions: Subscription[] = [];
  private _gameSubscription: Subscription = new Subscription();


  constructor(
    private http: HttpClient,
    private gameService: WagerService,
    private _store: Store<State>) {

  }

  ngOnInit() {

    this._store.dispatch(WagerActions.loadWagers());
        const _gamesSubscription = this._store.select("wagers")
      .subscribe((result) => {
        this.games = result.games;
      });
    this._subscriptions.push(_gamesSubscription);

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
    console.log('gamens', this.games)
    if(this.games){
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

  ngOnDestroy() {
    this._gameSubscription.unsubscribe();
    this._subscriptions.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }
}
