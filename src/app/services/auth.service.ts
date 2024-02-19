import { Injectable } from '@angular/core';
// import data from '../../assets/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  async login(username: string, password: string) {
    let res = await fetch('../../assets/users.json');
    let data = await res.json();

    if (
      data.users[0].username === username &&
      data.users[0].password === password
    ) {
      return data;
    } else {
      console.log('Username or password wrong');
      return false;
    }
  }
}
