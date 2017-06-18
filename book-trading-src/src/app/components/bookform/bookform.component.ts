import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { GooglebookService } from '../../services/googlebook.service';
import { BookService } from '../../services/book.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.scss']
})
export class BookformComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private auth: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private googlebookService: GooglebookService,
    private bookService: BookService
  ) { }

  searchForm: FormGroup;
  searchTerm: string;
  searchResults: any;
  totalResults: number;
  searching: boolean = false;
  currentPage: number = 1;
  itemsPerPage: number = 12;

  ngOnInit() {
    this.titleService.setTitle('Add a Book - Book Xchange');
    this.buildForm();
  }

  buildForm(): void {
    this.searchForm = this.fb.group({
      'search': ['', [
        Validators.required
      ]]
    });
    this.searchForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  // onValueChanged function taken from the Angular Cookbook's Form Validation section
  // https://angular.io/docs/ts/latest/cookbook/form-validation.html
  onValueChanged(data?: any) {
    if (!this.searchForm) { return; }
    const form = this.searchForm;

    for (const field in this.formErrors) {
      // clear previous error message if any
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  formErrors = {
    'search': ''
  }

  validationMessages = {
    'search': {
      'required': 'A search city is required.'
    }
  }

  isFirstPage() {
    if (this.currentPage == 1) {
      return true;
    } else {
      return false;
    }
  }

  isLastPage() {
    if (Math.ceil(Number(this.totalResults) / Number(this.itemsPerPage)) == this.currentPage) {
      return true;
    } else {
      return false;
    }
  }

  nextPage() {
    this.currentPage += 1;
    this.updateSearchResults();
  }

  prevPage() {
    this.currentPage -= 1;
    this.updateSearchResults();
  }

  onSearchSubmit() {
    // check if search form is valid
    if (this.searchForm.valid) {
      this.currentPage = 1;
      this.searchTerm = this.searchForm.value.search;
      this.updateSearchResults();
    }
  }

  updateSearchResults() {
    this.searching = true;
    this.searchResults = undefined;
    this.googlebookService.getBooks(this.searchTerm, this.itemsPerPage, this.currentPage).subscribe(
      data => {
        this.searchResults = data.items;
        console.log('searchResults:', this.searchResults);
        this.totalResults = data.totalItems;
        this.searching = false;
      },
      err => {
        console.error(err);
        this.searching = false;
        return false;
      }
    );
  }

  addBook(volumeId) {
    this.googlebookService.getBookById(volumeId).subscribe(
      data => {
        let smallUrl, smallThumbnailUrl;
        console.log('data', data);
        if (data.volumeInfo.imageLinks == undefined) {
          // book has no image, substitute book image from s3
          smallUrl = 'https://s3.amazonaws.com/andydlindsay-book-trading/book-152-191668.png';
          smallThumbnailUrl = 'https://s3.amazonaws.com/andydlindsay-book-trading/book-152-191668.png';
        } else {
          smallUrl = data.volumeInfo.imageLinks.small,
          smallThumbnailUrl = data.volumeInfo.imageLinks.smallThumbnail
        }
        const newBook = {
          volumeId,
          title: data.volumeInfo.title,
          smallUrl,
          smallThumbnailUrl
        }
        this.bookService.addBook(newBook).subscribe(
          data => {
            console.log('book added?', data);
            this.flashMessage.show('Book added!', { cssClass: 'alert-success' });
            this.updateSearchResults();
          },
          err => {
            console.error(err);
            return false;
          }
        );
      },
      err => {
        console.error(err);
        return false;
      }
    );
  }

}
