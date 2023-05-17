import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  public filterText: string = '';

  @Output() name = new EventEmitter<string>();

  constructor() {}
    ngOnInit(): void {
    }

    sendFilter(): void {
      this.name.emit(this.filterText);
    }

}
