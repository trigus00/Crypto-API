import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {
  // key:string = 'E23A2959-DB75-42BD-9A68-31AB6A693CB6'
  // Neely API key 
  key:string = '9A30258B-A261-42C8-84FD-9BC7C4F9058A'
  hearders = new HttpHeaders()
  .set('Accept' , 'application/json')
  .set('X-CoinAPI-Key',this.key)
  // .set('Accept-Encoding','gzip,deflate')
  .set(`X-RateLimit-Remaining`, `SUM(X-RateLimit-Request-Cost)` )

  currentDate = new Date()

  constructor(private http: HttpClient) { }
  

  getCoin(search: string,date: Date) {
  date.toUTCString()
    
    return this.http.get(`https://rest.coinapi.io/v1/exchangerate/${search}/USD/history?period_id=5MIN&limit=100&time_start=${date.toISOString()}`,{'headers':this.hearders})
    
  }
  getVolume(){
    return this.http.get(`https://rest.coinapi.io/v1/assets`,{'headers':this.hearders})
  }

}

// {
