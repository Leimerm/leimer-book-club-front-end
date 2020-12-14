import { Component, OnInit } from '@angular/core';

interface Audiences {
  value: string;
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {
  panelOpenState = false;
  checked = false;

  selectedValue: string;

  audiences: Audiences[] = [
    {value: 'New Reader'},
    {value: 'Children'},
    {value: 'Young Adult'},
    {value: 'Adult'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
