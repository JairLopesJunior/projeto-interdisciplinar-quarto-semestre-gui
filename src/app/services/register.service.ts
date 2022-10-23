import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private registerUrl: string = 'http://localhost:8080/api/register';

  constructor(private _httpClient: HttpClient) { }

  save(component: RegisterService): Observable<RegisterService> {
    return this._httpClient.post<RegisterService>(`${this.registerUrl}`, component);
  }
}
