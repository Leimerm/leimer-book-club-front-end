import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookApi: string;
  constructor(private http: HttpClient) {
    this.bookApi = `${environment.apiUrl}`
   }


  addBook(book: Book) {
    return this.http.post(`${this.bookApi}/books`, book)
  }

  getBookData(): Observable<Book> {
    return this.http.get<Book>(`${this.bookApi}/books`)
  }

  getOneBook(book: Book): Observable<Book> {
    return this.http.get<Book>(`${this.bookApi}/books/${book.id}`)
  }
}
