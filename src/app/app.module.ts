import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullwidthModule } from './layouts/fullwidth/fullwidth.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ChartViewComponent } from './chart-view/chart-view.component';
import { ChartComponent } from './chart/chart.component';
import {MatCardModule} from '@angular/material/card';
import { AboutComponent } from './about/about.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ChartViewComponent,
    ChartComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    NoopAnimationsModule,
    MatCardModule,
    HighchartsChartModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
