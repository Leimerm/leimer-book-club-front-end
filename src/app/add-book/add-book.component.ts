import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';

interface Audiences {
  value: string;
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  checked = false;

 newBookInfo: FormGroup = new FormGroup({
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
    summary: new FormControl("", [Validators.required]),
  });

  selectedValue: string;

  audiences: Audiences[] = [
    {value: 'New Reader'},
    {value: 'Children'},
    {value: 'Young Adult'},
    {value: 'Adult'}
  ];
  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
  }

  addNewBook () {
    this.bookService.addBook(this.newBookInfo.value).subscribe(data=>{
      console.log(data);
    })
  }

  clearForm() {
    this.newBookInfo.reset(
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
