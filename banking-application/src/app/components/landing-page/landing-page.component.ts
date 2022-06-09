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


  //on initialization execute method to recieve specific user data from the database. The Id is taken from the URL to get that specific account's data. On initialization call helper method to generate doughnut chart.
  ngOnInit(): void {
    const number: number = +this.route.snapshot.paramMap.get('id')!;
    this.bankService.getSpecificAccount(number).subscribe(res => {
      this.account = res;
      this.createChart1(this.account.checkingsBalance, this.account.savingsBalance);

    });


  }


  //Doughnut chart helper method. Generates chart using chart.js. Takes user data from database as a parameter to display the balances.

  createChart1(checkings: number, savings: number): void {
    Chart.register(...registerables);
    const data = {
      labels: ['Checkings', 'Savings'],
      datasets: [{
        label: 'Account Distribution',
        backgroundColor: ['rgb(78, 114, 223)', 'rgb(28, 200, 137)'],
        borderColor: ['rgb(78, 114, 223)', 'rgb(28, 200, 137)'],
        data: [checkings, savings],
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
      type: 'doughnut',
      data: data,
      options: options
    }
    const chartItem: ChartItem = document.getElementById('my-chart2') as ChartItem
    new Chart(chartItem, config)
  }


}

