import { Component, OnInit } from '@angular/core';
import { ChartViewService } from '../chart-view/chart-view.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data ;
  constructor(private chartviewService: ChartViewService) { }

  ngOnInit(): void {
    this.data = this.chartviewService.getData();
  }

}
