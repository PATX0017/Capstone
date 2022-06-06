import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/common/account';
import { BankService } from 'src/app/services/bank.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  account = new Account();

  constructor(private bankService: BankService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {
    this.getAccountInfo();
  }

  getAccountInfo() {
    const numbers: number = +this.route.snapshot.paramMap.get('id')!;
    console.log(numbers);
    this.bankService.getSpecificAccount(numbers).subscribe(res => { this.account = res });

  }

}
