import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
id;
  constructor(public router:Router) { }

  ngOnInit()
   {

    this.id=sessionStorage.getItem("UserId");
    if(this.id==null)
    {
      this.router.navigate(["/Login"]);
    }
  }

  logout()
  {
    delete sessionStorage["UserId"];
    this.router.navigate(["/Login"]);
  }

}
