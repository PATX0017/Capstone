import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/common/account';
import { BankService } from 'src/app/services/bank.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  account = new Account();
  constructor(private bankService: BankService) { }

  ngOnInit(): void {
  }

  addClient(account: Account) {

    this.bankService.addAccount(account);


  }
}
