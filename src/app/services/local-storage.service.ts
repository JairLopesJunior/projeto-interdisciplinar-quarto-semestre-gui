import { LoginResponse } from './../models/login-response';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private readonly key = 'userData';

  constructor() { }

  public save(userData: LoginResponse): void {
    let userDataStr = JSON.stringify(userData);
    localStorage.setItem(this.key, userDataStr);
  }

  public getToken(): string {
    let userData: LoginResponse = JSON.parse(localStorage.getItem(this.key) as string);
    return userData.token;
  }

  public getUserId(): number {
    let userData: LoginResponse = JSON.parse(localStorage.getItem(this.key) as string);
    return userData.user_id;
  }
}
