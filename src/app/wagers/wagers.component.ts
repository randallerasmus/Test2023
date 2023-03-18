import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GameService } from './services/game.service';
import { Game } from './models/game.model';

@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent implements OnInit {
  games: Game[] = [];
  selectedGame: any;

  dataSource = new BehaviorSubject<Game[]>([]);
  displayedColumns: string[] = ['name', 'date', 'location'];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getLiveGames().subscribe(
      response => {
        console.log(response);
        this.games = response;
      },
      error => {
        console.log(error);
      }
    );
  }

  onSearch(query: string) {
    if (query) {
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
