export interface Game {
  time:string;
  date: string;
  team1:string;
  team2:string;
}

export interface GameCollection {
  games: Game[];
  wagers: Game[];
}
