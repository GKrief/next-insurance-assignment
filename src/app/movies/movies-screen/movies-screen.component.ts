import { Component, OnInit } from '@angular/core';
import {Movie} from '../../core/models/movie';
import {MovieService} from '../movie.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.css']
})
export class MoviesScreenComponent implements OnInit {

  movies$: Movie[];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovies().pipe(first()).subscribe( moviesData => {
      this.movies$ = moviesData;
    });
  }

}
