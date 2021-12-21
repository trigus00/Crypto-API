import { Component, OnInit, ViewChild } from '@angular/core';
import { CryptoDataService } from '../crypto-data.service';
import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexYAxis, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';
import myData from '../../assets/gus.json'


type DataPoint = {
  x: Date;
  y: number[]
}

export type ChartOptions = {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  xaxis: ApexXAxis | any;
  yaxis: ApexYAxis | any;
  title: ApexTitleSubtitle | any;
};

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
  value!: Date;
  dataPoints: Array<DataPoint> = [];
  mydata: any;



  constructor(private CryptoDataService: CryptoDataService) {


   }


  ngOnInit(): void {

  }


  getCoinData() {
    // this.search = this.search.toUpperCase()
    // this.CryptoDataService.getCoin(this.search, this.value)
    //   .subscribe((response: any) => {
    //     this.coinData = response
    //     // console.log(this.coinData)
    //     this.coinData.forEach(item => {
    //       // Store the data High,Low, Open, close 
    //       // Array of items 
    //       const dp: DataPoint = {
    //         // x: item.time_open,
    //         x: new Date(1538778600000),
    //         y: [item.rate_close, item.rate_low, item.rate_high, item.rate_open]
    //       }
    //       this.dataPoints.push(dp);

    //     })
    //     console.log(this.dataPoints)

    //   })
  
      this.coinData = myData
          // console.log(this.coinData)
          this.coinData.forEach(item => {
            // Store the data High,Low, Open, close 
            // Array of items 
            const dp: DataPoint = {
              x: item.time_open,
              // x: new Date(1538778600000),
              y: [item.rate_close, item.rate_low, item.rate_high, item.rate_open]
            }
            this.dataPoints.push(dp);
  
          })
          console.log(this.dataPoints)
    
  }

  

  public chartOptions: Partial<ChartOptions> = {

    series: {
      name: "Cypto Candle Stick Chart",
      data: this.dataPoints
    }
    ,
    chart: {
      type: "candlestick",
      height: 400
    },
    title: {
      text: "Crypto CandleStick Chart",
      align: "Center"
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: {
      tooltip: {
        enabled: true
      }
    }, 
  };
}


