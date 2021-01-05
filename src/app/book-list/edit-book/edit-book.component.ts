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

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private router: Router,
  ) { }

  checked = false;
  book: Book;


  editBookInfo: FormGroup = new FormGroup({
    title: new FormControl("", [Validators.required]),
    author: new FormControl("", [Validators.required]),
    genre: new FormControl("", [Validators.required]),
    intened_audience: new FormControl("", [Validators.required]),
    part_of_series: new FormControl(""),
    next_book: new FormControl(""),
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
    this.bookService.getBook(id).subscribe(book => {this.book = book
      this.editBookInfo.controls.title.setValue(this.book.title);
      this.editBookInfo.controls.author.setValue(this.book.author);
      this.editBookInfo.controls.genre.setValue(this.book.genre);
      this.editBookInfo.controls.intened_audience.setValue(this.book.intened_audience);
      this.editBookInfo.controls.part_of_series.setValue(this.book.part_of_series);
      this.editBookInfo.controls.next_book.setValue(this.book.next_book);
      this.editBookInfo.controls.cover_picture.setValue(this.book.cover_picture);
      this.editBookInfo.controls.alt_cover1.setValue(this.book.alt_cover1);
      this.editBookInfo.controls.alt_cover2.setValue(this.book.alt_cover2);
      this.editBookInfo.controls.alt_cover3.setValue(this.book.alt_cover3);
      this.editBookInfo.controls.summary.setValue(this.book.summary);
    });
  }

  editBook(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.updateBook(id).subscribe(data=>{
      console.log(data);
    });
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
