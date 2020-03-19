import { Component, OnInit } from '@angular/core';
import { YahooService } from './yahoo.service';
import { StockDetail } from './stock.types';
import { AMAZON_GET_DETAILS } from './stock.mocks';

interface Stock {
  symbol: String;
  prePrice: number;
  postPrice: number;
  postPercent: number;
}

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.scss']
})
export class StocksComponent implements OnInit {

  stocksUS: Stock[];

  symbolsUS = [
    'AMZN',
    'GOOG',
    'MSFT',
    'AMD',
    'SNE'
  ];
  preCovidPriceUS = [
    2200,
    1500,
    190,
    60,
    72
  ];


  stocksCA: Stock[];
  symbolsCA = [
    'DOL.TO',
    'RY',
    'TD.TO',
    'BMO.TO'
  ];

  preCovidPriceCA = [
    48,
    80.58,
    75,
    101
  ];

  postCovidPercentage = [];

  constructor(private yahooFinanceAPI: YahooService) { }

  ngOnInit(): void {
    this.stocksUS = [{ symbol: 'Refresh US', prePrice: 0, postPrice: 0, postPercent: 0 }];
    this.stocksCA = [{ symbol: 'Refresh CA', prePrice: 0, postPrice: 0, postPercent: 0 }];
  }

  getPercentage(oldN: number, newN: number): number {
    return (newN - oldN) / oldN;
  }

  getUSStocks() {
    this.stocksUS = [];
    this.symbolsUS.forEach((symbol: String, index: number) => {
      console.warn('getting symbol: ', symbol);
      this.yahooFinanceAPI.getStockDetails('US', symbol).subscribe((res: StockDetail) => {
        console.warn('got res for symbol: ', symbol, ' : ', res);
        const postCP = this.getPercentage(this.preCovidPriceUS[index], res.price.regularMarketPrice.raw);
        this.postCovidPercentage[index] = postCP;
        this.stocksUS.push({
          symbol: symbol,
          prePrice: this.preCovidPriceUS[index],
          postPrice: res.price.regularMarketPrice.raw,
          postPercent: postCP
        });
      }, (err: any) => {
        console.warn('ERROR: symbol: ', symbol, ' : ', err);
      });
    });

  }

  getCAStocks() {
    this.stocksCA = [];
    this.symbolsCA.forEach((symbol: String, index: number) => {
      console.warn('getting symbol: ', symbol);
      this.yahooFinanceAPI.getStockDetails('CA', symbol).subscribe((res: StockDetail) => {
        console.warn('got res for symbol: ', symbol, ' : ', res);
        const postCP = this.getPercentage(this.preCovidPriceCA[index], res.price.regularMarketPrice.raw);
        this.postCovidPercentage[index] = postCP;
        this.stocksCA.push({
          symbol: symbol,
          prePrice: this.preCovidPriceCA[index],
          postPrice: res.price.regularMarketPrice.raw,
          postPercent: postCP
        });
      }, (err: any) => {
        console.warn('ERROR: symbol: ', symbol, ' : ', err);
      });
    });
  }

}
