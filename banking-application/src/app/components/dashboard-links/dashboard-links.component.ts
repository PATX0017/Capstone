import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-dashboard-links',
  templateUrl: './dashboard-links.component.html',
  styleUrls: ['./dashboard-links.component.css']
})
export class DashboardLinksComponent implements OnInit {

  // Recieves the accountNumber from Parent Component. Used to map URLS on Breadcrumbs
  @Input() accountNumber!: number;

  constructor(
    public router: Router) { }

  ngOnInit(): void {

  }


  //Method to check if the current route includes a string (url endpoints). If returns true, then the breadcrumb will be displayed on the view, else it will be hidden.
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }
}
