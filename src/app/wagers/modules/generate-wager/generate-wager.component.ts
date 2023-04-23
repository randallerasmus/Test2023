import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {DatePipe} from "@angular/common";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {WagerService} from "../../services/wager.service";
import {Store} from "@ngrx/store";
import {AppState} from "../../../state/app.state";
import {selectGameSearchQuery} from "../../reducers/wager.reducer";
import {Dialog} from "@angular/cdk/dialog";

@Component({
  selector: 'app-generate-wager',
  templateUrl: './generate-wager.component.html',
  styleUrls: ['./generate-wager.component.css']
})
export class GenerateWagerComponent implements OnInit{

  awayTeamPredictionOptions = [  { value: '1', label: 'Win' },  { value: '0', label: 'Lose' }];
  answer: any;

  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    public dialog: MatDialog,
    private _wagerService: WagerService,
    public dialogRef: MatDialogRef<GenerateWagerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private store: Store<AppState>
  ) {

  }

  ngOnInit() {
   console.log('you can set the data up', this.data)

  }

  setEventType() {
    switch(this.data.selectedOptionData.league) {
      case '445638':
        return 'Champions League';
      case '442590':
        return 'Premier League';
      case '489248':
        return 'La Liga';
      case '456603':
        return 'Bundesliga';
      case '492431':
        return 'Serie A League';
      default:
        return ''; // or some other default value
    }
  }

  updateAwayTeamPrediction(homeTeamPredictionValue: number) {
    if (homeTeamPredictionValue === 1) { // Home team prediction is "Win"
      this.awayTeamPredictionOptions = [{value: '0', label: 'Loose'}];
    } else if (homeTeamPredictionValue === 0) { // Home team prediction is "Loose"
      this.awayTeamPredictionOptions = [{value:'1', label: 'Win'}];
    }
  }

  cancel() {
        let dialogRef = this.dialog.open(Dialog, {
          data: {
            type: 'warning',
            title: 'Cancel',
            bodyText: 'All captured data will be lost.',
            subBodyText: ' Are you sure you want to continue?',
            dismissBtnText: 'No',
            confirmBtnText: 'Yes',
          },
        });

        dialogRef.afterClosed().subscribe((result) => {
          if (result.result) {
            this.dialogRef.close();
          }
        });
      }

  canSetPrediction() {
    return undefined;
  }

  setPrediction() {

  }
}
