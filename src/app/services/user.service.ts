import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  book: Book;
  private bookApi: string;
  user: User;
  constructor(private http: HttpClient) {
    this.bookApi = `${environment.apiUrl}`
  }

  createUser(user: User) {
    return this.http.post(`${this.bookApi}/users`, user)
  }
}
