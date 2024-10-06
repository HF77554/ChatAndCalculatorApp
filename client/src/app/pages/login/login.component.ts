import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  LoginObj: LoginInformation;
  constructor(){
    this.LoginObj = new LoginInformation();
  }
}

export class LoginInformation{
  LoginEmail: string;
  LoginPassword: string;
  constructor(){
    this.LoginEmail = '';
    this.LoginPassword = '';
  }
}