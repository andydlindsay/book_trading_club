import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { BookService } from './services/book.service';
import { GooglebookService } from './services/googlebook.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BookComponent } from './components/book/book.component';
import { BookformComponent } from './components/bookform/bookform.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'book/:id', component: BookComponent },
  { path: 'newbook', component: BookformComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    NavigationComponent,
    BookComponent,
    BookformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule,
    FlashMessagesModule,
    FlexLayoutModule
  ],
  providers: [
    Title,
    AuthService,
    AuthGuard,
    BookService,
    GooglebookService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
