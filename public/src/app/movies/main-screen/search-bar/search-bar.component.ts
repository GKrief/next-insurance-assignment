import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchOptions} from '../../../core/enums/search-options.enum';
import {Search} from '../../../core/models/search';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  readonly SEARCH_OPTIONS = Object.values(SearchOptions);

  @Output() searchEmitter = new EventEmitter<Search>();
  searchCriteria: Search;
  selectedOption: string;
  searchValue = '';

  constructor() {
  }

  ngOnInit(): void {
    this.searchCriteria = new Search(this.SEARCH_OPTIONS[0], '');
  }

  isSearchByRating(): boolean {
    return this.searchCriteria.searchOption === SearchOptions.ByRating;
  }

  onSearchValueChange(): void {
    this.emitSearchCriteria();
  }

  onSearchOptionChange(option: SearchOptions): void {
    this.searchCriteria.searchOption = option;
    this.searchCriteria.searchValue = '';
    this.emitSearchCriteria();
  }

  private emitSearchCriteria(): void {
    this.searchEmitter.emit(this.searchCriteria);
  }
}
