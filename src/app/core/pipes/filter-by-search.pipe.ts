import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from '../models/movie';
import {SearchOptions} from '../enums/search-options.enum';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(movies: Movie[], searchOption: SearchOptions, searchValue: string): Movie[] {
    if (searchOption === SearchOptions.ByTitle) {
      if (!movies) {
        return movies;
      }

      return movies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()));
    } else { // by rating
      if (!movies || searchValue === '') {
        return movies;
      }

      return movies.filter(movie => movie.rating >= parseFloat(searchValue));
    }
  }
}
