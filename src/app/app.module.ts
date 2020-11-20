import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesScreenComponent } from './movies/movies-screen/movies-screen.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';
import { MovieLengthPipe } from './core/pipes/movie-length.pipe';
import { SanitizeHtmlPipe } from './core/pipes/sanitize-html.pipe';
import { SearchBarComponent } from './movies/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import { FilterBySearchPipe } from './core/pipes/filter-by-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesScreenComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    MovieLengthPipe,
    SanitizeHtmlPipe,
    SearchBarComponent,
    FilterBySearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MDBBootstrapModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
