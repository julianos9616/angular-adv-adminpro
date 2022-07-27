import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  titulo: string = 'ventas';

  // labelsString: string = 'Download Sales,In-Store Sales,Mail-Order Sales';
  labelsString: string = 'Download Sales';

  public labels1: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  public data1 =  [
      { data: [ 350, 450, 100 ], backgroundColor: ['#6857E6','#009FEE','#F02059'] },
    ]
  }
 
