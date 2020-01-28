import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  UserId;
  Name;
  CVV;
  Card_Number;
  Expire;

  constructor(private service:UserService,public router:Router) { }

  ngOnInit() {
  }


  
Add(myForm)
{
  this.UserId=sessionStorage.getItem("UserId");
  this.service.GetAddPay(this.UserId,this.Name,this.CVV,this.Card_Number,this.Expire).subscribe(data=>
    {
      window.alert("Payment successfully:"+this.Name);
      window.alert("Your Order is placed Now.....");
      this.router.navigate(['/VisitUs']);
    })
}
}
