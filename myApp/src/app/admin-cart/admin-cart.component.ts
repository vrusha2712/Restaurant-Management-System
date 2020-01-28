import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-cart',
  templateUrl: './admin-cart.component.html',
  styleUrls: ['./admin-cart.component.css']
})
export class AdminCartComponent implements OnInit {

  CartData;
  constructor(private service:UserService,
    public router:Router) { }

  ngOnInit()
  {
   console.log("Home Component Loaded")
   let resultstate=this.service.GetCartDetails();
   resultstate.subscribe((data)=>{
     this.CartData = data;
         
       });

}
}