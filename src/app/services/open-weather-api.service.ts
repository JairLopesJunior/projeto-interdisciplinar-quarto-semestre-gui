import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiWeatherResponse } from '../models/api-weather-response';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherApiService {

  private _url: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private _httpClient: HttpClient) { }

  public getWeather(): Observable<ApiWeatherResponse> {
    let city = 'araras';
    return this._httpClient.get<ApiWeatherResponse>(`${this._url}?units=metric&q=${city}&appid=b9795f9d42196457a8d78fdc7c9db77f&lang=pt_br`);
  }
}
