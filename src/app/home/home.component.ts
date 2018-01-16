import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';
import {HomePageService} from "../service/homepage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  weatherData: any;
  rateData: any;
  rmtobdt:any;

  constructor(private quoteService: QuoteService, private homeService: HomePageService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote({ category: 'dev' })
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((quote: string) => { this.quote = quote; });

    this.homeService.getRate()
        .subscribe(
            (data: any[]) => {
                this.rateData = data;
                this.rmtobdt = (this.rateData['rates'].BDT) / (this.rateData['rates'].MYR)
                console.log(this.rmtobdt)
            }
        );

    this.homeService.getWeather()
        .subscribe(
            (data: any[]) => {
                this.weatherData = data;
            }
        );
     }

}
