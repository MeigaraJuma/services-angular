import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  // Function lower case
  toLower(str) {
    return str.toLowerCase();
  }

  // Validate all form
  validateRegister(user) {
    if (user.name === undefined || user.username === undefined || user.email === undefined || user.password === undefined) {
      return false;
    } else {
      return true;
    }
  }

  // Validate email
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    return re.test(this.toLower(String(email)));
  }
}

