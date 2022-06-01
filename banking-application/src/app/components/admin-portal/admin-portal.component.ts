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
    this.accounts$ = this.bankService.getAccountInfo();
  }

}
