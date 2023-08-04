import { Component } from '@angular/core';
import { Login } from '../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public loginData: Login = {
    username: '',
    password: ''
  };

  isLoginValid() {

    return (
      this.loginData.username.includes('@') &&
      this.loginData.username.length >= 10 &&
      this.loginData.password.length >= 6
    );
  }

  getButtonBackgroundColor() {
    return this.isLoginValid() ? '#464646' : '#C9B133';
  }

  onSubmit() {

    if (this.isLoginValid()) {
      console.log('Login Data:', this.loginData);
    }
  }
}
