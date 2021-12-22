import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../crypto-data.service';

@Component({
  selector: 'app-volume',
  templateUrl: './volume.component.html',
  styleUrls: ['./volume.component.scss']
})
export class VolumeComponent implements OnInit {
  volumes: Array<any> = []
  acendingOrder: Array<number> = []
  Order: Array<number> = []
  constructor(private CryptoDataService: CryptoDataService) { }

  ngOnInit(): void {
    this.getVolume()
  }

  getVolume() {
    this.CryptoDataService.getVolume()
      .subscribe((respose: any) => {
        this.volumes = respose
        this.volumes.forEach(volume => {
          if (volume.type_is_crypto === 1 && volume.volume_1day_usd !=0 && volume.asset_id !=null) {
            this.acendingOrder.push(volume.volume_1day_usd)
            for (let i = 0; i < this.acendingOrder.length; i++) {
              for (let j = i - 1; j > -1; j--) {

                //value comparison using ascending order.
                if (this.acendingOrder[j + 1] > this.acendingOrder[j]) {

                  //swap
                  [this.acendingOrder[j + 1], this.acendingOrder[j]] = [this.acendingOrder[j], this.acendingOrder[j + 1]];

                }
              }
            }
          }
        }

        )

      })
      // this.Order = this.acendingOrder.splice(9,this.acendingOrder.length)
      console.log((this.acendingOrder.splice(5,3219)))
  }

}
