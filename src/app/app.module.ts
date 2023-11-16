import { NgModule } from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // 1. Import RouterModule and Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormControl, Validators, FormsModule, } from '@angular/forms';



import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { TwoTeamsComponent } from './two-teams/two-teams.component';
import { TeamNamesService } from './services/team-names.service';




const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent},
  { path: 'two-teams', component: TwoTeamsComponent},
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TwoTeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule, // 3. Add RouterModule to imports array and call forRoot() method with Routes array
    ReactiveFormsModule
  ],
  providers: [TeamNamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

