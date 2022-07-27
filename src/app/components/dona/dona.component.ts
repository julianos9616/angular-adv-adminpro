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
  @Input() stringLabels: string = '';
  @Input() dataGrafic: any = [];

  labelsString: string = 'Download Sales,In-Store Sales,Mail-Order Sales';
  labelsDonut = this.labelsString.split(',')
  // labelsDonut = this.stringLabels.split(" ");
  
  public doughnutChartLabels: string[] = [ 'sin valor','sin valor','sin valor' ];
  @Input() doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: ['#6857E6','#009FEE','#F02059'] },
    ]
  };
  public doughnutChartType: ChartType = 'doughnut'; 

  datos(){
    console.log(this.stringLabels);
    console.log(this.labelsDonut);
  }

}
