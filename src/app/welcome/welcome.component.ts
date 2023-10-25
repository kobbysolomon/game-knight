import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  numberOfTeams: number = 0;
  scoreToWin: number = 0;
  scoreIncrement: number = 0;

}
