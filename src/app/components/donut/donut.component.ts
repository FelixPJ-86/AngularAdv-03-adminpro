import { Component, Input, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styles: [
  ]
})
export class DonutComponent {

  @Input() title:string='Sin titulo';

@Input('labels') doughnutChartLabels: Label[] = ['Label1', 'Label2', 'Label3'];
@Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  public colors:Color []=[
    {
      backgroundColor:['#9E120E', '#FF5800','#FFB414']
    }
  ];
}
