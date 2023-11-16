import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { TeamNamesService } from '../services/team-names.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  welcomeForm: FormGroup;
  generatedTeamNames: string[] = [];




  // numberOfTeamsOptions: number[] = [ 2, 3, 4]; 
  // scoreToWinOptions: number[] = [10, 15, 20, 25]; 
  // scoreIncrementOptions: number[] = [1, 2, 5, 10]; 

  numberOfTeams: number = 0;
  scoreToWin: number = 0;
  scoreIncrement: number = 0;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private teamNamesService: TeamNamesService) {
    this.welcomeForm = this.formBuilder.group({
      numberOfTeams: [null, Validators.required],
      scoreToWin: [null, Validators.required],
      scoreIncrement: [null, Validators.required],
    });




  }




  submitWelcomeForm() {
    const numberOfTeams = this.welcomeForm.get('numberOfTeams')?.value;
    const scoreToWin = this.welcomeForm.get('scoreToWin')?.value;
    const scoreIncrement = this.welcomeForm.get('scoreIncrement')?.value;

    console.log(numberOfTeams);
    console.log(scoreToWin);
    console.log(scoreIncrement);

    // Validation for form
    if (numberOfTeams == null || scoreToWin == null || scoreIncrement == null) {
      this.errorMessage = 'Hmm, looks like you missed something..🤔 ';
    } 
            // Listen for changes in the form values
            this.welcomeForm.valueChanges.subscribe(() => {
              this.updateErrorMessage();
            });

    if (numberOfTeams && scoreToWin && scoreIncrement) {
      this.generatedTeamNames = this.teamNamesService.generateTeamNames(numberOfTeams);
      console.log(this.generatedTeamNames);
    }
  } // end of submitWelcomeForm()


  private updateErrorMessage() {
    // Check if any of the required fields is null
    if (
      this.welcomeForm.get('numberOfTeams')?.value == null ||
      this.welcomeForm.get('scoreToWin')?.value == null ||
      this.welcomeForm.get('scoreIncrement')?.value == null
    ) {
      this.errorMessage = '🤔';
    } 
    else {
      this.errorMessage = '';
    }
  }


} // end of class
