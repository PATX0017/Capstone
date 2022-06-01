import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { Account } from 'src/app/common/account';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  account = new Account();

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.bankService.getSpecificAccount(1).subscribe(res => { this.account = res });

  }



}
