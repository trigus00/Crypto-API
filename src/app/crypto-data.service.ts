import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {
  // key = 'd12d0c22-13b4-4ef7-8b8c-44d9b2792c08';
  // key = ' e19d456d-0d0c-4cd3-9331-843876159048'//coinCap
  key:string = 'E23A2959-DB75-42BD-9A68-31AB6A693CB6'

  hearders = new HttpHeaders()
  .set('Accept' , 'application/json')
  .set('X-CoinAPI-Key',this.key)
  // .set('Accept-Encoding','gzip,deflate');
  currentDate = new Date(new Date)

  constructor(private http: HttpClient) { }

  // toISO(){
  //    this.date.toISOString()
  // }

  getCoin(search: string, date: Date) {
    date.toISOString()

    // return this.http.get(`https://api.gemini.com/v2/candles/${search}/5m`)
    // return this.http.get(`https://api.coincap.io/v2/candles?exchange=poloniex&interval=d1&baseId=${search}&quoteId=bitcoin`,{'headers':this.hearders})
    return this.http.get(`https://rest.coinapi.io/v1/exchangerate/${search}/USD/history?period_id=5MIN&time_start=${date.toISOString()}`,{'headers':this.hearders})

  }

  getDetails(search: string) {
    return this.http.get(`https://api.gemini.com/v2/ticker/${search}`)
  }

  getCoinCap(search: string ){
    return this.http.get(`https://api.coincap.io/v2/assets/${search}`,{'headers':this.hearders})
  }
}

