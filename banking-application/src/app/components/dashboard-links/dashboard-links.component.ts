import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard-links',
  templateUrl: './dashboard-links.component.html',
  styleUrls: ['./dashboard-links.component.css']
})
export class DashboardLinksComponent implements OnInit {

  @Input() accountNumber!: number;

  constructor(
    public router: Router) { }

  ngOnInit(): void {

  }

  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
