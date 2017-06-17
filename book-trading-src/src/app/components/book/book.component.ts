import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';
import { GooglebookService } from '../../services/googlebook.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  constructor(
    private titleService: Title,
    private auth: AuthService,
    private bookService: BookService,
    private route: ActivatedRoute,
    private googlebookService: GooglebookService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  book: any;
  googleBook: any;
  user_id: any;

  ngOnInit() {

    this.route.params
      .subscribe(params => {
        const book_id = params['id'];
        this.bookService.getBookById(book_id)
          .subscribe(
            data => {
              if (data) {
                this.book = data.book;
                this.titleService.setTitle(data.book.title + ' - Book Xchange');
                this.googlebookService.getBookById(data.book.volumeId)
                  .subscribe(
                    data => {
                      this.googleBook = data;
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
      });

    if (this.auth.loggedIn()) {
      const user = JSON.parse(localStorage.getItem('user'));
      this.user_id = user.id;
    }
  }

  isLoggedIn() {
    return this.auth.loggedIn();
  }

  onRequestClick() {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/register']);
    } else {
      this.bookService.makeRequest(this.book._id).subscribe(
        data => {
          if (data.success) {
            this.flashMessage.show('Request made!', { cssClass: 'alert-success' });
            const currentUrl = this.router.url;
            const refreshUrl = currentUrl.indexOf('someRoute') > -1 ? '/someOtherRoute' : '/someRoute';
            this.router.navigateByUrl(refreshUrl).then(() => {
              this.router.navigateByUrl(currentUrl);
            });
          } else {
            this.flashMessage.show(data.msg + ' Please try again.', { cssClass: 'alert-failuer' });
          }
        },
        err => {
          console.error(err);
          return false;
        }
      );
    }
  }

}
