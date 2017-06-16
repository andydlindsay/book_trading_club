import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private titleService: Title,
    private auth: AuthService,
    private bookService: BookService
  ) { }

  books: any;

  ngOnInit() {
    this.titleService.setTitle('Home - Book Xchange');
    this.bookService.getBooks().subscribe(
      data => {
        if (data) {
          this.books = data.books;
          console.log(this.books);
        }
      },
      err => {
        console.error(err);
        return false;
      }
    );
  }

  isLoggedIn() {
    return this.auth.loggedIn();
  }

}
