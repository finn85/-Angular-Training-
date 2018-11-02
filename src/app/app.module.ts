import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

import {AppRoutingModule} from "./app-routing.module";

import {UserService} from "./user.service";
import {SpinnerService} from "./spinner.service";

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditProfileComponent} from "./edit-profile/edit-profile.component";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    NotFoundComponent,
    UserProfileComponent,
    EditProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    CookieService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
