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


  //Method Calls the service method addAccount() to add account info to the database. On execution, sends a success message. 
  addClient(): void {

    this.bankService.addAccount(this.account);
    alert("Successfully added new Client to the bank's database")


  }
}
