import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/common/account';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  account = new Account();

  constructor(private bankService: BankService,
    private route: ActivatedRoute,
    private router: Router) { }

  //On init, call service method using the id param from the current URL to get the specific account data.
  ngOnInit(): void {
    const number: number = +this.route.snapshot.paramMap.get('id')!;

    this.bankService.getSpecificAccount(number).subscribe(res => { this.account = res })
  }

  //deposit method that checks if user selects Checking or Savings, and recieves a deposit amount to send to the Service in order to update balances. Provides a success message and redirects back to the dashboard on execution.
  deposit(amount: number, selection: string) {

    if (selection.includes('1')) {
      this.bankService.depositCheckings(amount, this.account);
    }
    else {
      this.bankService.depositSavings(amount, this.account);
    }
    alert("Successful Deposit");

    this.router.navigate(['/', 'account', this.account.accountNumber])
  }
}
