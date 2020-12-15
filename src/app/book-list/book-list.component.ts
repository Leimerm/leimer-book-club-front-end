import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';
import { BookService } from '../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  bookinfo: Book;

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBookData().subscribe(x => {this.bookinfo = x})
  }

  checkPic(bookinfo) {
    if(bookinfo.cover_picture) {
      return bookinfo.cover_picture
    }else {
      return "https://d3525k1ryd2155.cloudfront.net/h/050/337/953337050.0.m.jpg"
    }
  }

  routeToViewBook(id: number) {
    this.router.navigate([`/book/${id}`])
  }

}


