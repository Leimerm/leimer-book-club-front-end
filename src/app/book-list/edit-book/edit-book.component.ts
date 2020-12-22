import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

interface Audiences {
  value: string;
}

interface Genres {
  value: string;
}

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  checked = false;
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
  ) { }

  editBookInfo: FormGroup = new FormGroup({
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
  selectedValue2: string;

  genres : Genres [] = [
    {value: 'Adventure'},
    {value: 'Classic'},
    {value: 'Comic Book'},
    {value: 'Graphic Novel'},
    {value: 'Mystery'},
    {value: 'Fantasy'},
    {value: 'Historical Fiction'},
    {value: 'Horror'},
    {value: 'Romance'},
    {value: 'Science Fiction'},
    {value: 'Thriller'},
    {value: 'Biography'},
    {value: 'Autobiography'},
    {value: 'Nonfiction'},
  ];

  audiences: Audiences[] = [
    {value: 'New Reader'},
    {value: 'Children'},
    {value: 'Young Adult'},
    {value: 'Adult'}
  ];

  ngOnInit(): void {
    this.getBook()
  }

  getBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

  editBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.updateBook(this.editBookInfo.value).subscribe(book => this.book = book);
    this.router.navigate([`/book/${id}`]);
  }

  checkNextBook() {
    if (this.book.next_book) {
      return this.book.next_book
    } else {
      return "None"
    }
  }

  checkAltCover1 () {
    if (this.book.alt_cover1){
      return this.book.alt_cover1
    } else {
      return "None"
    }
  }

  checkAltCover2 () {
    if (this.book.alt_cover2){
      return this.book.alt_cover2
    } else {
      return "None"
    }
  }

  checkAltCover3 () {
    if (this.book.alt_cover3){
      return this.book.alt_cover3
    } else {
      return "None"
    }
  }

}
