import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-chart-view',
  templateUrl: './chart-view.component.html',
  styleUrls: ['./chart-view.component.css'],
  
})
export class ChartViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Highcharts = Highcharts;
  linechart = {
    series: [
      {
        data: []
      }
    ],
    chart: {
      type: "line"
    },
    title: {
      text: "linechart"
    }
  };
  
 

 



}


