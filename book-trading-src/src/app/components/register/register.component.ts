import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  formErrors = {
    'username': '',
    'password': ''
  };

  validationMessages = {
    'username': {
      'required': 'Username is required.',
      'minlength': 'Username must be at least 8 characters long.',
      'maxlength': 'Username cannot be more than 25 characters long.',
      'pattern': 'Username cannot contain special characters or spaces.'
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password must be at least 8 characters long.',
      'maxlength': 'Password cannot be more than 25 characters long.'
    }
  };

  constructor(
    private fb: FormBuilder,
    private titleService: Title,
    private auth: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Register - Book Xchange');
    this.buildForm();
  }

  buildForm(): void {
    this.registerForm = this.fb.group({
      'username': ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25),
        Validators.pattern(/^[a-zA-Z0-9]+$/)
      ]],
      'password': ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(25)
      ]]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));

  }

  // onValueChanged function taken from the Angular Cookbook's Form Validation section
  // https://angular.io/docs/ts/latest/cookbook/form-validation.html
  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;

    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message if any
        this.formErrors[field] = '';
        const control = form.get(field);

        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      // create a user object to hold form values
      const newUser = this.registerForm.value;

      // submit user to database
      this.auth.registerUser(newUser).subscribe(data => {
        if (data.success) {
          const msg = 'You have successfully registered! Please log in with your username and password.';
          this.flashMessage.show(msg, { cssClass: 'alert-success', timeout: 5000 });
          this.router.navigate(['/login']);
        } else {
          if (data.errmsg.includes('E11000')) {
            const msg = 'A user with that username already exists. Please choose a different username.';
            this.flashMessage.show(msg, { cssClass: 'alert-failure', timeout: 5000 });
          } else {
            this.flashMessage.show(data.msg, { cssClass: 'alert-failure', timeout: 5000 });
          }
        }
      });

    } else {
      console.log('Errors remain...');
    }
  }

}
