import { Component } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {GameService} from "./services/game.service";
import {Game} from "./models/game.model";

@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent {
  games: Game[] = [];

  dataSource = new BehaviorSubject<string[]>([]);
  constructor(private gameService: GameService) {
  }
  onSearch(query: string) {
    this.gameService.getLiveGames().subscribe(games => {
      // Filter games based on search query
      const filteredGames = games.filter(game => game.name.toLowerCase().includes(query.toLowerCase()));

      // Update the component's games array with the filtered games
      this.games = filteredGames;
  })
 }
}
