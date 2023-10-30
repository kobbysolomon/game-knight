import { Component } from '@angular/core';

@Component({
  selector: 'app-two-teams',
  templateUrl: './two-teams.component.html',
  styleUrls: ['./two-teams.component.css']
})
export class TwoTeamsComponent {


  scoreToWinRound: number = 21;
  scoreIncrement: number = 1;

  roundsPlayed: number = 0;
  teamOneRoundsWon: number = 0;
  teamTwoRoundsWon: number = 0;


  teamOneName: string = "Team One";
  teamOneScore: number = 18;

  teamTwoName: string = "Team Two";
  teamTwoScore: number = 36;



  increaseTeamOneScore() {
    this.teamOneScore += this.scoreIncrement;
  }

  decreaseTeamOneScore() {
    this.teamOneScore -= this.scoreIncrement;
  }


  increaseTeamTwoScore() {
    this.teamTwoScore += this.scoreIncrement;
  }

  decreaseTeamTwoScore() {
    this.teamTwoScore -= this.scoreIncrement;
  }



  


}
