import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { GooglebookService } from './googlebook.service';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  authToken: any;
  // baseUrl: String = 'http://localhost:8080';
  baseUrl: String = '';

  constructor(
    private http: Http,
    private googlebookService: GooglebookService
  ) { }

  getBooks() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + '/api/books/', { headers })
      .map(res => res.json());
  }

  getBooksByOwner(owner_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
        this.baseUrl + '/api/books/byowner/' + owner_id,
        { headers })
      .map(res => res.json());
  }

  getBookById(book_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
        this.baseUrl + '/api/books/' + book_id,
        { headers })
      .map(res => res.json());
  }

  makeRequest(book_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get(
        this.baseUrl + '/api/books/' + book_id + '/request',
        { headers })
      .map(res => res.json());
  }

  cancelRequest(book_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get(
        this.baseUrl + '/api/books/' + book_id + '/cancelrequest',
        { headers })
      .map(res => res.json());
  }

  tradeBook(book_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get(
        this.baseUrl + '/api/books/' + book_id + '/trade',
        { headers })
      .map(res => res.json());
  }

  loadToken() {
    this.authToken = localStorage.getItem('id_token');
  }

  getBooksRequestedByUser() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get(
        this.baseUrl + '/api/books/requestedby',
        { headers })
      .map(res => res.json());
  }

  getBooksRequestedFromUser() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.get(
        this.baseUrl + '/api/books/requestedfrom',
        { headers })
      .map(res => res.json());
  }

  deleteBook(book_id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.delete(
        this.baseUrl + '/api/books/' + book_id,
        { headers })
      .map(res => res.json());
  }

  addBook(newBook): any {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.loadToken();
    headers.append('Authorization', this.authToken);
    return this.http.post(
      this.baseUrl + '/api/books/new',
      newBook,
      { headers })
    .map(res => res.json());
  }

}
