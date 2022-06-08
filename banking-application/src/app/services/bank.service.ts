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

  getAccountInfo(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.baseUrl + "accounts");
  }

  getSpecificAccount(accNum: number): Observable<Account> {
    return this.httpClient.get<Account>(this.baseUrl + "account/" + accNum);
  }

  addAccount(account: Account) {
    return this.httpClient.post<Account>(this.baseUrl + "add_account", account);
  }
}
