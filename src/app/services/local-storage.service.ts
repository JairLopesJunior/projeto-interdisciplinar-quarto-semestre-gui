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
}