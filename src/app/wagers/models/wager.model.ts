
export interface WagerStateInterface {
  isLoading:boolean;
  wagers: WagerInterface[];
  error: string | null;
}
export interface WagerInterface {

  time:string;
  date: string;
  team1:string;
  team2:string;
}


