import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../model/book';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  private subs = new Subscription;
  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
  ) { }

  ngOnInit(): void {
    this.retrieveBook(this.book)
  }

  retrieveBook(book: Book) {
    this.bookService.getOneBook(book).subscribe(x => {this.book = x})
  }


}
