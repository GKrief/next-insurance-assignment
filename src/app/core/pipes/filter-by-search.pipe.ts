import { Pipe, PipeTransform } from '@angular/core';
import {Movie} from '../models/movie';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(movies: Movie[], searchInput: string): Movie[] {
    if (!movies) {
      return movies;
    }

    return movies.filter(movie => movie.title.toLowerCase().includes(searchInput.toLowerCase()));
  }

}
