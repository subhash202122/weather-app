import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service';

@Component({
  selector: 'app-weather',
  templateUrl: './.component.html',
  styleUrls: ['./.component.css']
})
export class WeatherComponent implements OnInit {
  city: string = '';
  country: string = '';
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {}

  getWeather() {
    this.weatherService.getWeatherData(this.city, this.country).subscribe(data => {
      this.weatherData = data;
    });
  }
}
