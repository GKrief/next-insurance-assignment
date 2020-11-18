import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MoviesScreenComponent} from './movies/movies-screen/movies-screen.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';

const appRoutes: Routes = [
  {
    path: 'movies',
    component: MoviesScreenComponent
  },
  {
    path: 'movies/:id',
    component: MovieDetailsComponent
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
  // TODO: add PageNotFound (404) and **
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class AppRoutingModule { }
