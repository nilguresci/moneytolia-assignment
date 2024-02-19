import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { loginInfo } from '../../models/auth';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import storageHelper from '../../helpers/storage.helper';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  loginInfo: loginInfo = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}
  async login() {
    if (
      !this.isEmpty(this.loginInfo.username) &&
      !this.isEmpty(this.loginInfo.password)
    ) {
      let result = await this.authService.login(
        this.loginInfo.username,
        this.loginInfo.password
      );

      if (result) {
        storageHelper.setValueWithKey('user', result.users[0].id);
        this.router.navigate(['/']);
      }
    } else {
      alert('Lütfen kullanıcı adı ve şifrenizi giriniz.');
    }
  }

  isEmpty(value: any) {
    return (
      value == null || (typeof value === 'string' && value.trim().length === 0)
    );
  }
}
