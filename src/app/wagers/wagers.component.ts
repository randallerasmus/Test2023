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
import {MatDialog} from "@angular/material/dialog";
import {GenerateWagerComponent} from "./modules/generate-wager/generate-wager.component";

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
  rowEvent:any;


  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,public dialog: MatDialog,
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
  startWagerDialog(data : any) {
    this.dialog.open(GenerateWagerComponent, {
      width:'500px',
      height:'450px',
      data: {
        selectedRow: data,
        selectedOptionData: this.searchFormGroup.value
      },
    });
  }

  onRowClick(event:any) {
    this.rowEvent = event;
    console.log('this can open the detail view', this.rowEvent)
  }

  clearFields() {
    this.searchFormGroup.reset()
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


}

