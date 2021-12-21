import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CryptoDataService } from '../crypto-data.service';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexYAxis, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';


// export type ChartOptions = {
//   series: ApexAxisChartSeries | any;
//   chart: ApexChart | any;
//   xaxis: ApexXAxis | any;
//   yaxis: ApexYAxis | any;
//   title: ApexTitleSubtitle | any;
// };

@Component({
  selector: 'app-cypto-dashboard',
  templateUrl: './cypto-dashboard.component.html',
  styleUrls: ['./cypto-dashboard.component.scss']
})

export class CyptoDashboardComponent implements OnInit {
  @ViewChild("chart")
  chart!: ChartComponent;
  coinData: Array<any> = []
  search: string = ''
  open: Array<number> = []
  close: Array<number> = []
  high: Array<number> = []
  low: Array<number> = []
  time: number = 0;
  volume: Array<number> = []
  dettail: Array <number> = [];
  value!: Date ;
 

  constructor(private CryptoDataService: CryptoDataService) { }
 

  ngOnInit(): void {
    this.getCoinData()
   
  }

  // ngOnChange():void{
  //   console.log(this.date)   
  // }



  getCoinData() { 
    this.search = this.search.toUpperCase()
    this.CryptoDataService.getCoin(this.search,this.value)
      .subscribe((response: any) => {
        this.coinData = (response)
        console.log(response) 
        
        })
      }
    }