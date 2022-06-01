import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { Account } from 'src/app/common/account';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  account = new Account();

  constructor(private bankService: BankService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //accounts/:id = account/2
    const number: number = +this.route.snapshot.paramMap.get('id')!;
    this.bankService.getSpecificAccount(number).subscribe(res => { this.account = res });

  }



}
