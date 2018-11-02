import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserProfileComponent} from "./user-profile/user-profile.component";
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {EditProfileComponent} from "./edit-profile/edit-profile.component";


const appRoutes: Routes = [
  {path: '',  redirectTo: '/login', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'userProfile', component: UserProfileComponent},
  {path: 'editProfile', component: EditProfileComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
