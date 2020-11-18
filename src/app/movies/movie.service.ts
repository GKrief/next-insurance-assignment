import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../core/models/movie';
import {map} from 'rxjs/operators';
import {
  ID_HEADER, LARGE_IMG_HEADER,
  RATING_HEADER,
  RELEASED_HEADER,
  RUNTIME_HEADER,
  SMALL_IMG_HEADER,
  SYNOPSIS_HEADER,
  TITLE_HEADER
} from '../core/constants/global';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly MOVIES_URL = environment.movies_url;

  constructor(private http: HttpClient) {
  }

  public getMovies(): Observable<Movie[]> {
    return this.http.get<any>(this.MOVIES_URL).pipe(
      map(response => {
        return response.map(movieData => this.createMovieInstance(movieData));
      })
    );
  }

  private createMovieInstance(movieData: any): Movie {
    return new Movie(movieData[ID_HEADER], movieData[TITLE_HEADER], movieData[SYNOPSIS_HEADER], movieData[RATING_HEADER],
      movieData[RELEASED_HEADER], movieData[RUNTIME_HEADER], movieData[SMALL_IMG_HEADER], movieData[LARGE_IMG_HEADER]);
  }
}
