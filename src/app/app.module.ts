import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgApexchartsModule } from 'ng-apexcharts';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CyptoDashboardComponent } from './cypto-dashboard/cypto-dashboard.component';
import { VolumeComponent } from './volume/volume.component';




@NgModule({
  declarations: [
    AppComponent,
    CyptoDashboardComponent,
    VolumeComponent,
  
    // ApexCharts

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    CalendarModule,
    TableModule,
    DropdownModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
