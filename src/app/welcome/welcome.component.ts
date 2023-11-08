import { Component } from '@angular/core';
import { FormGroup, FormBuilder, } from '@angular/forms';

import { TeamNamesService } from '../services/team-names.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeForm: FormGroup;
  generatedTeamNames: string[] = [];

  errorMessages = {
    numberOfTeamsError: '',
    scoreToWinError: '',
    scoreIncrementError: ''
  };

  numberOfTeamsOptions: number[] = [ 2, 3, 4]; 
  scoreToWinOptions: number[] = [10, 15, 20, 25]; 
  scoreIncrementOptions: number[] = [1, 2, 5, 10]; 

  numberOfTeams: number = 0;
scoreToWin: number = 0;
scoreIncrement: number = 0;

  constructor(private formBuilder: FormBuilder, private teamNamesService: TeamNamesService) {
    this.welcomeForm = this.formBuilder.group({
      numberOfTeams: [null],
      scoreToWin: [null],
      scoreIncrement: [null],
    });

  }



submitWelcomeForm() {
  const numberOfTeams = this.welcomeForm.get('numberOfTeams')?.value;
  const scoreToWin = this.welcomeForm.get('scoreToWin')?.value;
  const scoreIncrement = this.welcomeForm.get('scoreIncrement')?.value;

  console.log(numberOfTeams);
  console.log(scoreToWin);
  console.log(scoreIncrement);

  if(!numberOfTeams ){
    this.errorMessages.numberOfTeamsError = "Please select number of teams.";
  } else {
    this.errorMessages.numberOfTeamsError = "";
  }

  if(!scoreToWin ){
    this.errorMessages.scoreToWinError = "Please select score to win a round.";
  } else {
    this.errorMessages.scoreToWinError = "";
  }

  if(!scoreIncrement ){
    this.errorMessages.scoreIncrementError = "Please select score increment.";
  } else {
    this.errorMessages.scoreIncrementError = "";
  }

  if(numberOfTeams && scoreToWin && scoreIncrement){
    this.generatedTeamNames = this.teamNamesService.generateTeamNames(numberOfTeams);
    console.log(this.generatedTeamNames);
  }
} // end of submitWelcomeForm()





} // end of class
