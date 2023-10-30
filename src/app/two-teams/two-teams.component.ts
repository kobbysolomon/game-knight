import { Component } from '@angular/core';

@Component({
  selector: 'app-two-teams',
  templateUrl: './two-teams.component.html',
  styleUrls: ['./two-teams.component.css']
})
export class TwoTeamsComponent {

  scoreToWin: number = 21;
  roundsPlayed: number = 0;

}
