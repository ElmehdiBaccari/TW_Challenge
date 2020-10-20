import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ChartViewService {
  items = [];

  constructor(  private http: HttpClient ) { }


  getData() {
    return this.http.get('/assets/sensor-measurements.json');
  }


}
