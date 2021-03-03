import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchString: string = '';

  @Output() searchStringChangeEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onKey(event: any): void {
    this.searchString = event.target.value;
    this.searchStringChangeEvent.emit(this.searchString);
  }
}
