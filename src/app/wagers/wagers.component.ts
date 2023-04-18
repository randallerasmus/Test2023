import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";
import {selectGameSearchQuery} from "./reducers/wager.reducer";
import {searchGames, setSearchQuery} from "./actions/wager.actions";
import {AppState} from "../state/app.state";
import {Store} from "@ngrx/store";
import {WagerService} from "./services/wager.service";
import { DatePipe } from '@angular/common';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-wagers',
  templateUrl: './wagers.component.html',
  styleUrls: ['./wagers.component.css']
})
export class WagersComponent  implements OnInit {

  gamesForm: FormGroup;
  searchQuery$: Observable<any>;
  searchResults!: MatTableDataSource<any>;
  soccerGames: any;
  expandedRow = false;

  displayedColumns = ['away_team', 'home_team', 'date', 'time','actions'];
  searchFormGroup!: FormGroup;
  dropdownsSelected = false;


  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private _wagerService: WagerService,
    private store: Store<AppState>
  ) {
    this.gamesForm = this.formBuilder.group({
      searchQuery: '',
    });
    this.searchQuery$ = this.store.select(selectGameSearchQuery);
  }

  ngOnInit() {
    // there is a tournament_id -- just search on https://www.apex-football.com/scores/england/premier-league-442590/
    // just update the tournament_id
    this.searchFormGroup = this.formBuilder.group({
      event: [''],
      sport: [''],
      league: [''],
    });

  }

  searchForGames() {
    const eventSelection = this.searchFormGroup.get('league')?.value
    this._wagerService.getGames(eventSelection).subscribe(
      response => {
        this.searchResults = new MatTableDataSource(response.events.filter((event: any) => event.status !== 'finished'));
      },
      error => console.error(error)
    );
  }

  onRowClick(event:{name: string}) {
    this.expandedRow = true;
  }

  clearFields() {
    this.searchFormGroup.reset()
  }

  //
  checkDropdowns() {
    // [disabled]="!dropdownsSelected" must be added to the button
    const event = this.searchFormGroup.controls['event'].value;
    const sport = this.searchFormGroup.controls['sport'].value;


    this.dropdownsSelected = !!(event && (!event || sport) && (!sport));
  }

  canSearch() {
    // --- true disables
    // --- false enables
    const canSearchWagers = this.searchFormGroup.get('league')?.pristine
    if(canSearchWagers){
      return true;
    }else {
      return false;
    }
  }

  openCloneDialog(): void {
  //   event.stopPropagation();
  //
  //   this.dialog.open(CreateAdditionalCodeComponent, {
  //     disableClose: true,
  //     width: '60%',
  //     data: {
  //       additionalCode: data,
  //       isClone: true,
  //     },
  //   });
  }
}

