import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // 1. Import RouterModule and Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';




const routes: Routes = [
  { 
    path: 'welcome', component: WelcomeComponent,
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
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
    BrowserAnimationsModule // 3. Add RouterModule to imports array and call forRoot() method with Routes array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

