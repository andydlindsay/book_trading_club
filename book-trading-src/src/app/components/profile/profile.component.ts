import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private titleService: Title,
    private auth: AuthService,
    private bookService: BookService
  ) { }

  books: any;
  user: any;
  booksRequestedBy: any;
  booksRequestedFrom: any;

  ngOnInit() {
    this.titleService.setTitle('Profile - Book Xchange');
    this.auth.getUserProfile().subscribe(
      data => {
        if (data) {
          this.user = data.user;
          console.log(this.user);
          this.bookService.getBooksByOwner(this.user['id']).subscribe(
            data => {
              this.books = data.books;
              console.log(this.books);
            },
            err => {
              console.error(err);
              return false;
            }
          );
        }
      },
      err => {
        console.error(err);
        return false;
      }
    );
    this.bookService.getBooksRequestedByUser().subscribe(
      data => {
        this.booksRequestedBy = data.books;
        console.log('requestedby:', this.booksRequestedBy);
      },
      err => {
        console.error(err);
        return false;
      }
    );
    this.bookService.getBooksRequestedFromUser().subscribe(
      data => {
        this.booksRequestedFrom = data.books;
        console.log('requestedfrom:', this.booksRequestedFrom);
      },
      err => {
        console.error(err);
        return false;
      }
    );
  }

}
