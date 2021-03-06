import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Movie} from '../core/models/movie';
import {first, map} from 'rxjs/operators';
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
  movies$: Movie[] = [];

  constructor(private http: HttpClient) {
    this.getMovies().pipe(first()).subscribe( movies => this.movies$ = movies,
      () => window.alert('Something went wrong! Server did not respond'));
  }

  private getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.MOVIES_URL).pipe(
      map(response => {
        return response.map(movieData => this.createMovieInstance(movieData));
      })
    );
  }

  private createMovieInstance(movieData: any): Movie {
    return new Movie(movieData[ID_HEADER], this.parseHtmlEncodings(movieData[TITLE_HEADER]),
      this.parseHtmlEncodings(movieData[SYNOPSIS_HEADER]), parseFloat(movieData[RATING_HEADER]), movieData[RELEASED_HEADER],
      movieData[RUNTIME_HEADER], movieData[SMALL_IMG_HEADER], movieData[LARGE_IMG_HEADER]);
  }

  // Some of the texts fetched from the server are with HTML encodings. Here I parse some of them, ideally it should be handled at server-side
  private parseHtmlEncodings(encodedString: string): string {
    return encodedString
      .replace(/&#39;|&rsquo;/gi, '\'')
      .replace(/<br>|<b>|<\/b>/gi, ' ');
  }

  public getMovieById(movieId: string): Movie {
    return this.movies$.find(movie => movie.id === movieId);
  }
}
