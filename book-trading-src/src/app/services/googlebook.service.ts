import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/filter';

@Injectable()
export class GooglebookService {

  constructor(
    private http: Http
  ) { }

  public getBookById(volume_id): any {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
        'https://www.googleapis.com/books/v1/volumes/' + volume_id,
        { headers }
      )
      .map(res => res.json());
  }

  public getBooks(searchTerm, itemsPerPage, currentPage) {
    const startIndex = (currentPage - 1) * itemsPerPage < 0 ? 0 : (currentPage - 1) * itemsPerPage;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    const queryString = '?q=' + searchTerm + '&printType=books&startIndex=' + startIndex + '&maxResults=' + itemsPerPage;
    return this.http.get(
        'https://www.googleapis.com/books/v1/volumes' + queryString,
        { headers}
      )
      .map(res => res.json());
  }

}
