import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/common/account';

@Component({
  selector: 'app-checkings',
  templateUrl: './checkings.component.html',
  styleUrls: ['./checkings.component.css']
})
export class CheckingsComponent implements OnInit {

  account = new Account();

  constructor(private bankService: BankService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const number: number = +this.route.snapshot.paramMap.get('id')!;

    this.bankService.getSpecificAccount(number).subscribe(res => { this.account = res })
  }

}
