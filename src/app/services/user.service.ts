import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Book } from '../model/book';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  login = new BehaviorSubject (false);
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
