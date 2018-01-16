import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";


@Injectable()
export class HomePageService {

    weather_api = '6ed7b769b303bf57afc9c9bd0fe6abf0';
    city_name = 'Kuala lumpur';
    getWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + this.city_name + '&units=metric&appid=' + this.weather_api;

    getRateUrl = 'https://openexchangerates.org/api/latest.json?app_id=37c235024cf141e0b504347e08e06f86';
    constructor( public http: HttpClient, private _router: Router) {
    }

    getWeather() {
        return this.http.get(this.getWeatherUrl);
    }

    getRate(){
        return this.http.get(this.getRateUrl);

    }


}
