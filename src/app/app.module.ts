import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesScreenComponent } from './movies/movies-screen/movies-screen.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MoviesScreenComponent,
    MovieDetailsComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      RouterModule,
      HttpClientModule,
      MDBBootstrapModule.forRoot()
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
