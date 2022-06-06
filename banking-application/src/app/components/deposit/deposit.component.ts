import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const number: number = +this.route.snapshot.paramMap.get('id')!;

    this.bankService.getSpecificAccount(number).subscribe(res => { this.account = res })
  }

}
