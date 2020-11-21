import {Component, OnInit} from '@angular/core';
import {Movie} from '../../core/models/movie';
import {MovieService} from '../movie.service';
import {Search} from '../../core/models/search';
import {SearchOptions} from '../../core/enums/search-options.enum';

@Component({
  selector: 'app-movies-screen',
  templateUrl: './movies-screen.component.html',
  styleUrls: ['./movies-screen.component.css']
})
export class MoviesScreenComponent implements OnInit {
  userSearch: Search;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.userSearch = new Search(SearchOptions.ByTitle, '');
  }

  getAllMovies(): Movie[] {
    return this.movieService.movies$;
  }

  onSearchCriteriaUpdated($event: Search): void {
    this.userSearch = $event;
  }
}
