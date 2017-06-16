import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService {

  authToken: any;
  baseUrl: String = 'http://localhost:8080';

  constructor(
    private http: Http
  ) { }

  getBooks() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.baseUrl + '/api/books/', { headers })
      .map(res => res.json());
  }

  getBooksByOwner(owner_id) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
      this.baseUrl + '/api/books/byowner/' + owner_id,
      { headers }
      )
      .map(res => res.json());
  }

}
