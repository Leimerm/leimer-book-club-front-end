import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Audiences {
  value: string;
}

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  searchInfo: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    author: new FormControl("", [Validators.required]),
    genre: new FormControl("", [Validators.required]),
    intened_audience: new FormControl("", [Validators.required]),
    part_of_series: new FormControl(""),
    next_book: new FormControl(""),
    rating: new FormControl(""),
    cover_picture: new FormControl("", [Validators.required]),
    alt_cover1: new FormControl(""),
    alt_cover2: new FormControl(""),
    alt_cover3: new FormControl(""),
  });

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

  clearForm() {
    this.searchInfo.reset(
    {title: '',
    author: '',
    genre: this.checked = false,
    intened_audience: '',
    part_of_series: '',
    next_book: '',
    rating: '',
    cover_picture: '',
    alt_cover1: '',
    alt_cover2: '',
    alt_cover3: ''}
    )
  }
}
