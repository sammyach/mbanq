import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedIn = false;
  constructor() { }

  logIn(){
    return false;
  }
}
