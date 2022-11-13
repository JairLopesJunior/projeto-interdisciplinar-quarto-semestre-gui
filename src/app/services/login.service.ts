import { LoginResponse } from './../models/login-response';
import { Observable, of } from 'rxjs';
import { LoginModel } from './../models/login-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl: string = 'http://localhost:3333/auth';

  constructor(private _httpClient: HttpClient) { }

  save(login: LoginModel): Observable<LoginResponse> {
    // let a = new LoginResponse();
    // a.id = 123;
    // a.token = 'asda';
    // return of(a);
    return this._httpClient.post<LoginResponse>(`${this._loginUrl}`, login);
  }
}
