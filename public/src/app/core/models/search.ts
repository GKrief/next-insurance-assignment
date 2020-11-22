import {SearchOptions} from '../enums/search-options.enum';

export class Search {
  searchOption: SearchOptions;
  searchValue: string;


  constructor(searchOption: SearchOptions, searchValue: string) {
    this.searchOption = searchOption;
    this.searchValue = searchValue;
  }
}
