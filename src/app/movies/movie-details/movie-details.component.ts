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
  }

  ngOnInit(): void {
    this.selectedMovie = this.movieService.getMovieById(this.activatedRoute.snapshot.paramMap.get('id'));
  }
}
