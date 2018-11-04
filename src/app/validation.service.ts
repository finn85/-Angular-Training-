import {Injectable} from '@angular/core';

@Injectable()

export class ValidationService {

  data: object = {
    loginName: {
      required: false,
      incorrectSymb: false
    },
    password: {
      required: false,
      incorrectSymb: false
    }
  }
}
