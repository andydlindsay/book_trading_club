import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/filter';

@Injectable()
export class GooglebookService {

  constructor(
    private http: Http
  ) { }

  public getBookById(volume_id): any {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(
        'https://www.googleapis.com/books/v1/volumes/' + volume_id,
        { headers }
      )
      .map(res => res.json());
  }

}
