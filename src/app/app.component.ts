import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  userForm: FormGroup = new FormGroup({
    'userName': new FormControl(null, [
      Validators.required
    ]),
    'userAge': new FormControl(null, [
      Validators.required
    ]),
    'userDateOfBirth': new FormControl(null, [
      Validators.required
    ]),
    'userDateOfLogin': new FormControl(null, [
      Validators.required
    ]),
    'userDateOfNotif': new FormControl(null, [
      Validators.required
    ])
  });

  placeholder = {
    userName: 'Enter your name',
    userAge: 'Enter your age',
    userDateOfBirth: 'YYYY/MM/DD',
    userDateOfLogin: 'DD MMMM YYYY',
    userDateOfNotif: 'DD-MMM-YY'
  };

  submit = () => {
    console.log(this.userForm);
  }
}

