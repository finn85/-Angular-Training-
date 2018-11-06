import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AppRoutingModule} from './app-routing.module';
import {UserListModule} from "./user-list/user-list.module";

import {CookieService} from 'ngx-cookie-service';
import {UserService} from './user.service';
import {SpinnerService} from './spinner.service';
import {ValidationService} from './validation.service'

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    UserListModule
  ],
  providers: [
    UserService,
    CookieService,
    SpinnerService,
    ValidationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
