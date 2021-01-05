import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  book: Book;
  private bookApi: string;
  constructor(private http: HttpClient) {
    this.bookApi = `${environment.apiUrl}`
   }

  selectedBook: BehaviorSubject<Book> = new BehaviorSubject<Book>(undefined);

  addBook(book: Book) {
    return this.http.post(`${this.bookApi}/books`, book)
  }

  getBookData(): Observable<Book> {
    return this.http.get<Book>(`${this.bookApi}/books`)
  }

  getOneBook(params): Observable<any> {
    return this.http.get<Book>(`${this.bookApi}/books/${params.id}`)
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.bookApi}/books/${id}`)
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.bookApi}/books/${id}`)
  }

  updateBook(params){
    return this.http.patch<Book>(`${this.bookApi}/books/${params}`, params)
  }

}
