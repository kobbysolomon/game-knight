import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // 1. Import RouterModule and Routes

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [ // 2. Define a route for the WelcomeComponent
  { path: 'welcome', component: WelcomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes) // 3. Add RouterModule to imports array and call forRoot() method with Routes array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

