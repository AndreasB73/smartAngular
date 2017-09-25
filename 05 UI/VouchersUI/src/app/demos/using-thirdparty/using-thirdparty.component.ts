import { Component, OnInit } from '@angular/core';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {single, multi} from './chart-data';

@Component({
  selector: 'app-using-thirdparty',
  templateUrl: './using-thirdparty.component.html',
  styleUrls: ['./using-thirdparty.component.css']
})
export class UsingThirdpartyComponent implements OnInit {    

  ngOnInit() {
  }

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  // line, area
  autoScale = true;
  
  constructor() {
    Object.assign(this, {single, multi})   
  }
  
  onSelect(event) {
    console.log(event);
  }  

}
