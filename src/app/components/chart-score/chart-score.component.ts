import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-chart-score',
  templateUrl: './chart-score.component.html',
  styleUrls: ['./chart-score.component.css']
})
export class ChartScoreComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() users: User[] = [];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 0
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      title: {
        display: true,
        text: 'Ranking de Score'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  ngOnChanges(){
    let usersNames: string[] = this.users.slice(0, 10).map((user) => {
      return user.login
    })
    let userScores: number[] = this.users.slice(0, 10).map((user) => {
      return user.score
    })
    this.barChartData = {
      labels: usersNames,
      datasets: [
        { data: userScores, label: 'Score', backgroundColor: "#13547a"}
      ]
    }
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    // console.log(event, active);
  }
}
