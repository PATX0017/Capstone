import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { Account } from 'src/app/common/account';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  accounts$!: Observable<Account[]>;

  constructor(private bankService: BankService) { }

  ngOnInit(): void {

    //On initialization of the component, call the service method to load User Account Data and Assign it to accounts$.
    this.accounts$ = this.bankService.getAccountInfo();
  }

}
