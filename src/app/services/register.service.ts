import { RegisterModel } from './../models/register-model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _registerUrl: string = 'http://localhost:8080/api/register';

  constructor(private _httpClient: HttpClient) { }

  save(register: RegisterModel): Observable<RegisterModel> {
    return this._httpClient.post<RegisterModel>(`${this._registerUrl}`, register);
  }
}
