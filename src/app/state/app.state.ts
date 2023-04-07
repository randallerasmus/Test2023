export interface AppState {
  gameSearch: Game[];
  wagers: Wager[];
  results: Result[];
}

export interface Game {
  id: number;
  team1: string;
  team2: string;
  date: Date;
  location: string;
}

export interface Wager {
  id: number;
  gameId: number;
  amount: number;
  accepted: boolean;
  winner: string;
}

export interface Result {
  id: number;
  gameId: number;
  winner: string;
}
