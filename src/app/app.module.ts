import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesScreenComponent } from './movies/main-screen/movies-screen/movies-screen.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './movies/main-screen/movie-card/movie-card.component';
import { MovieLengthPipe } from './core/pipes/movie-length.pipe';
import { SearchBarComponent } from './movies/main-screen/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import { FilterBySearchPipe } from './core/pipes/filter-by-search.pipe';
import { OnlyNumbersDirective } from './core/directives/only-numbers.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesScreenComponent,
    MovieDetailsComponent,
    MovieCardComponent,
    MovieLengthPipe,
    SearchBarComponent,
    FilterBySearchPipe,
    OnlyNumbersDirective,
    PageNotFoundComponent
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
