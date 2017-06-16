import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.auth.loggedIn();
  }

  onLogoutClick() {
    this.auth.logout();
    this.flashMessage.show('Logged out!', { cssClass: 'alert-success' });
    this.router.navigate(['/']);
  }

}
