import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/common/account';
import { BankService } from 'src/app/services/bank.service';



@Component({
  selector: 'app-dashboard-links',
  templateUrl: './dashboard-links.component.html',
  styleUrls: ['./dashboard-links.component.css']
})
export class DashboardLinksComponent implements OnInit {

  @Input() accountNumber!: number;

  constructor(private bankService: BankService,
    private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit(): void {

  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
