import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';
import { Account } from 'src/app/common/account';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {

  account = new Account();
  constructor(private bankService: BankService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    const number: number = +this.route.snapshot.paramMap.get('id')!;

    this.bankService.getSpecificAccount(number).subscribe(res => { this.account = res })
  }

}
