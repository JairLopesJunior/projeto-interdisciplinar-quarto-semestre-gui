import { MainResponse } from './main-response';
import { WeatherResponse } from './weather-response';

export class ApiWeatherResponse {
    'weather': WeatherResponse;
    'main': MainResponse;
}