import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user',
  templateUrl: './dashboard-user.component.html',
  styleUrls: ['./dashboard-user.component.css']
})
export class DashboardUserComponent implements OnInit {

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
