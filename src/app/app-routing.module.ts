import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserPageComponent} from "./user-page/user-page.component";
import {LoginComponent} from "./login/login.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const appRoutes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full' },
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'userPage', component: UserPageComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
