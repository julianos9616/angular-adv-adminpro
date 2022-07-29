import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent{



  @Input() titulo: string = "Sin titulo";
 
  
  @Input() doughnutChartLabels: string[] = [ 'sin valor','sin valor','sin valor' ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: ['#6857E6','#009FEE','#F02059'] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut'; 


}
