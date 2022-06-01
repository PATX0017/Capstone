import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { Account } from 'src/app/common/account';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  account!: Account;

  constructor(private bankService: BankService) { }

  ngOnInit(): void {

  }

  getAccountInfo(accountId: number) {
    this.bankService.getAccountInfo(accountId);
  }

}
