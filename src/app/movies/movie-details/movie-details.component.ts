import { Component, OnInit } from '@angular/core';
import {Movie} from '../../core/models/movie';
import {MovieService} from '../movie.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  selectedMovie: Movie;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) {
    this.selectedMovie = movieService.getMovieById(parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10));
    console.log(this.selectedMovie);
  }

  ngOnInit(): void {
  }

}
