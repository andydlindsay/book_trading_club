import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';
import { GooglebookService } from '../../services/googlebook.service';
import { ActivatedRoute } from '@angular/router';

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
    private googlebookService: GooglebookService
  ) { }

  book: any;
  googleBook: any;

  ngOnInit() {
    this.route.params
      .subscribe(params => {
        const book_id = params['id'];
        this.bookService.getBookById(book_id)
          .subscribe(
            data => {
              if (data) {
                this.book = data.book;
                console.log('book:', this.book);
                this.titleService.setTitle(data.book.title + ' - Book Xchange');
                this.googlebookService.getBookById(data.book.volumeId)
                  .subscribe(
                    data => {
                      this.googleBook = data;
                      console.log('googlebook:', this.googleBook);
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
  }

}
