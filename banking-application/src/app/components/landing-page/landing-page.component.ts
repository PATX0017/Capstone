import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { Account } from 'src/app/common/account';
import { ActivatedRoute } from '@angular/router';
import { Chart, ChartItem, ChartConfiguration, registerables } from 'node_modules/chart.js';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  account = new Account();
  balance!: number;
  constructor(private bankService: BankService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //accounts/:id = account/2
    const number: number = +this.route.snapshot.paramMap.get('id')!;
    this.bankService.getSpecificAccount(number).subscribe(res => {
      this.account = res;

    });
    this.createChart1(1, 2, 3);
    this.createChart2();

  }




  createChart1(num1: number, num2: number, num3: number): void {
    Chart.register(...registerables);
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', ''],
      datasets: [{
        label: 'Savings Account Growth',
        backgroundColor: 'rgb(28, 200, 137)',
        borderColor: 'rgb(28, 200, 137)',
        data: [num1, num2, num3, 20, 30, 45],
      }]

    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    }
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: options
    }
    const chartItem: ChartItem = document.getElementById('my-chart2') as ChartItem
    new Chart(chartItem, config)
  }
  createChart2(): void {
    Chart.register(...registerables);
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May'],
      datasets: [{
        label: 'Checkings Account Growth',
        backgroundColor: 'rgb(78, 114, 223)',
        borderColor: 'rgb(78, 114, 223)',
        data: [10, 5, 2, 20, 30, 45],
      }]

    };
    const options = {
      scales: {
        y: {
          beginAtZero: true,
          display: false
        }
      }
    }
    const config: ChartConfiguration = {
      type: 'line',
      data: data,
      options: options
    }
    const chartItem: ChartItem = document.getElementById('my-chart1') as ChartItem
    new Chart(chartItem, config)
  }


  depositModal() {

  }
}