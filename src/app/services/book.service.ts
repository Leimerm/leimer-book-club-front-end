import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
}
