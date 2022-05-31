import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account } from '../common/account'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BankService {

  account!: Account;
  baseUrl: string = "http://localhost:8080/"

  constructor(private httpClient: HttpClient) { }

  getAccountInfo(accountNumber: number) {
    return this.httpClient.get(this.baseUrl + accountNumber);
  }
}
