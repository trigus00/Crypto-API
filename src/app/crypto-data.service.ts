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


  currentDate = new Date(new Date)

  constructor(private http: HttpClient) { }
  

  getCoin(search: string,date: Date) {
    console.log(date.toISOString())
    
    return this.http.get(`https://rest.coinapi.io/v1/exchangerate/${search}/USD/history?period_id=5MIN&limit=100&time_start=${date.toISOString()}`,{'headers':this.hearders})
    

  }

  getDetails(search: string) {
    return this.http.get(`https://api.gemini.com/v2/ticker/${search}`)
  }

  getCoinCap(search: string ){
    return this.http.get(`https://api.coincap.io/v2/assets/${search}`,{'headers':this.hearders})
  }
}

// {
