import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockDetail } from './stock.types';

@Injectable({
  providedIn: 'root'
})
export class YahooService {

  constructor(private httpClient: HttpClient) { }

  getStockDetails(region: String, symbol: String) {
    const ENDPOINT = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-detail?region=${region}&lang=en&symbol=${symbol}`;
    const params = new HttpHeaders()
      .append('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com')
      .append('x-rapidapi-key', '9369ad4d98mshd948ad3e47e28fbp1f6518jsne4ce09bf881f');

    return this.httpClient.get<StockDetail>(ENDPOINT,
      {
        observe: 'body',
        responseType: 'json',
        headers: params
      }
    )
  }
}
