import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/common/account';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.css']
})
export class WithdrawalComponent implements OnInit {

  account = new Account();

  constructor(private route: ActivatedRoute,
    private bankService: BankService,
    private router: Router) { }

  //On init, call service method using the id param from the current URL to get the specific account data.
  ngOnInit(): void {
    const number: number = +this.route.snapshot.paramMap.get('id')!;

    this.bankService.getSpecificAccount(number).subscribe(res => { this.account = res })
  }

  //deposit method that checks if user selects Checking or Savings, and recieves a deposit amount to send to the Service in order to update balances. Provides a success message and redirects back to the dashboard on execution.
  withdraw(amount: number, selection: string) {


    if (selection.includes('1')) {
      this.bankService.withdrawCheckings(amount, this.account);
    }
    else {
      this.bankService.withdrawSavings(amount, this.account);
    }
    alert("Successful Withdrawal");
    this.router.navigate(['/', 'account', this.account.accountNumber]);
  }
}
