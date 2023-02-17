import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { User } from 'src/app/interfaces/user';
import { UserObservablesService } from 'src/app/services/user-observables.service';

@Component({
  selector: 'app-chart-score',
  templateUrl: './chart-score.component.html',
  styleUrls: ['./chart-score.component.css']
})
export class ChartScoreComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() users: User[] = [];
  usersNames: string[] = []
  usersFollowers: number[] = []

  constructor(private userService: UserObservablesService) { }

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
        text: 'Ranking de Seguidores'
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: []
  };

  ngOnChanges() {
    this.getFollowers()
  }

  getFollowers() {
    this.usersFollowers = [];
    this.usersNames = [];
    this.users.forEach(async user => {
      this.userService.getUserInfo(user.login).forEach((u: User) => {
        this.usersNames.push(u.login);
        this.usersFollowers.push(u.followers);
        this.graphChart();
      })
    })
  }

  graphChart() {
    this.barChartData = {
      labels: this.usersNames,
      datasets: [
        { data: this.usersFollowers, label: 'Seguidores', backgroundColor: "#13547a" }
      ]
    }
  }
}
