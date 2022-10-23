import { Observable } from 'rxjs';
import { LoginModel } from './../models/login-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _loginUrl: string = 'http://localhost:8080/api/login';

  constructor(private _httpClient: HttpClient) { }

  save(login: LoginModel): Observable<LoginModel> {
    return this._httpClient.post<LoginModel>(`${this._loginUrl}`, login);
  }
}
