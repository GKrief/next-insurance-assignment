import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MoviesScreenComponent} from './movies/movies-screen/movies-screen.component';
import {MovieDetailsComponent} from './movies/movie-details/movie-details.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

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
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})
export class AppRoutingModule { }
