import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { BookService } from '../../services/book.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private titleService: Title,
    private fb: FormBuilder,
    private auth: AuthService,
    private bookService: BookService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  books: any;
  user: any;
  booksRequestedBy: any;
  booksRequestedFrom: any;
  profileForm: FormGroup;

  ngOnInit() {
    this.titleService.setTitle('Profile - Book Xchange');
    this.auth.getUserProfile().subscribe(
      data => {
        if (data) {
          this.user = data.user;
          // console.log('user:', this.user);
          this.bookService.getBooksByOwner(this.user['id']).subscribe(
            data => {
              this.books = data.books;
              // console.log(this.books);
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
        // console.log('requestedby:', this.booksRequestedBy);
      },
      err => {
        console.error(err);
        return false;
      }
    );
    this.bookService.getBooksRequestedFromUser().subscribe(
      data => {
        this.booksRequestedFrom = data.books;
        // console.log('requestedfrom:', this.booksRequestedFrom);
      },
      err => {
        console.error(err);
        return false;
      }
    );
    this.buildForm();
  }

  onCancelClick(book_id) {
    this.bookService.cancelRequest(book_id).subscribe(
      data => {
        if (data.success) {
          this.flashMessage.show('Request cancelled.', { cssClass: 'alert-success' });
          // page refresh hack from Serj Sagan's answer on stackoverflow
          // https://stackoverflow.com/questions/38036498/angular2-router3-cant-reload-refresh-active-route/44580036#44580036
          const currentUrl = this.router.url;
          const refreshUrl = currentUrl.indexOf('someRoute') > -1 ? '/someOtherRoute' : '/someRoute';
          this.router.navigateByUrl(refreshUrl).then(() => {
            this.router.navigateByUrl(currentUrl);
          });
        } else {
          this.flashMessage.show(data.msg + ' Please try again.', { cssClass: 'alert-failure' });
        }
      },
      err => {
        console.error(err);
        return false;
      }
    );
  }

  onAcceptClick(book_id) {
    this.bookService.tradeBook(book_id).subscribe(
      data => {
        if (data.success) {
          this.flashMessage.show('Trade accepted.', { cssClass: 'alert-success' });
          const currentUrl = this.router.url;
          const refreshUrl = currentUrl.indexOf('someRoute') > -1 ? '/someOtherRoute' : '/someRoute';
          this.router.navigateByUrl(refreshUrl).then(() => {
            this.router.navigateByUrl(currentUrl);
          });
        } else {
          this.flashMessage.show(data.msg + ' Please try again.', { cssClass: 'alert-failure' });
        }
      },
      err => {
        console.error(err);
        return false;
      }
    );
  }

  buildForm(): void {
    this.profileForm = this.fb.group({
      'fullname': ['', [
        Validators.maxLength(35),
        Validators.minLength(3)
      ]],
      'city': ['', [
        Validators.maxLength(25)
      ]],
      'state': ['', [
        Validators.maxLength(25)
      ]]
    });
    this.profileForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  // onValueChanged function taken from the Angular Cookbook's Form Validation section
  // https://angular.io/docs/ts/latest/cookbook/form-validation.html
  onValueChanged(data?: any) {
    if (!this.profileForm) { return; }
    const form = this.profileForm;

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
    'fullname': '',
    'city': '',
    'state': ''
  }

  validationMessages = {
    'fullname': {
      'maxlength': 'Name must be 25 characters or less.',
      'minlength': 'Name must be at least 3 characters long.'
    },
    'city': {
      'maxlength': 'City must be 25 characters or less.'
    },
    'state': {
      'maxlength': 'State must be 25 characters or less.'
    }
  }

  onUpdateClick() {
    if (this.profileForm.valid && this.profileForm.dirty) {
      const userInfo = {
        'fullName': this.profileForm.value.fullname,
        'city': this.profileForm.value.city,
        'state': this.profileForm.value.state
      }
      this.auth.updateUser(userInfo).subscribe(
        data => {
          if (data.success) {
            this.flashMessage.show('Profile information saved.', { cssClass: 'alert-success' });
            this.profileForm.markAsPristine();
          } else {
            this.flashMessage.show(data.msg + ' Please try again.', { cssClass: 'alert-failure' });
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
