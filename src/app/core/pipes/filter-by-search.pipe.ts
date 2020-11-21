import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from '../models/movie';
import {SearchOptions} from '../enums/search-options.enum';

@Pipe({
  name: 'filterBySearch'
})
export class FilterBySearchPipe implements PipeTransform {

  transform(movies: Movie[], searchOption: SearchOptions, searchValue: string): Movie[] {
    if (!movies || searchValue === '') {
      return movies;
    }

    return movies.filter(this.getSearchOptions(searchOption, searchValue));
  }

  private getSearchOptions(searchOption: SearchOptions, searchValue: string): (movie: Movie) => boolean {
    const searchFunctions = {
      [SearchOptions.ByTitle]: movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()),
      [SearchOptions.ByRating]: movie => movie.rating >= parseFloat(searchValue),
    };

    return searchFunctions[searchOption];
  }
}
