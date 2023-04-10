import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable} from "rxjs";
import {selectGameSearchQuery} from "./reducers/wager.reducer";
import {searchGames, setSearchQuery} from "./actions/wager.actions";
import {AppState} from "../state/app.state";
import {Store} from "@ngrx/store";
import {WagerService} from "./services/wager.service";


@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent  implements OnInit {

  gamesForm: FormGroup;
  searchQuery$: Observable<any>;
  searchResults: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private _wagerService: WagerService,
    private store: Store<AppState>
  ) {
    this.gamesForm = this.formBuilder.group({
      searchQuery: '',
    });
    this.searchQuery$ = this.store.select(selectGameSearchQuery);
  }

  ngOnInit() {
    this.store.select(selectGameSearchQuery).subscribe(results => {
      this.searchResults = results;
    });
  }

  searchForGames() {
    const query = this.gamesForm?.get('searchQuery')?.value;

    this.store.dispatch(setSearchQuery({query}));
    this.store.dispatch(searchGames({query}));
  }
}
