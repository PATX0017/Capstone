import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/services/bank.service';
import { Account } from 'src/app/common/account';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  account = new Account();



  constructor(public route: ActivatedRoute,
    private bankService: BankService,
    public router: Router,
    public location: Location) {

    router.events.subscribe(val => {
      if (router.url == "/account/1") {
        this.getAccountInfo();
      }
    });
  }


  ngOnInit(): void {
    //accounts/:id = account/2

  }

  getAccountInfo() {
    const numbers: number = +this.route.snapshot.paramMap.get('id')!;
    console.log(numbers);
    this.bankService.getSpecificAccount(numbers).subscribe(res => { this.account = res });

  }

}

