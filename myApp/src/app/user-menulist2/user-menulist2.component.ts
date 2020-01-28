import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menulist2',
  templateUrl: './user-menulist2.component.html',
  styleUrls: ['./user-menulist2.component.css']
})
export class UserMenulist2Component implements OnInit {
list;
val;
MenuId;
  Price;
  UserId;
  Quantity
  constructor(private service:UserService,public router:Router) { }

  ngOnInit()
  {
    this.UserId=sessionStorage.getItem("UserId");
  console.log("component load");
 let resultstate=this.service.ShowMenuList2();
 console.log("menu items"+resultstate);
   resultstate.subscribe((data:any)=>{
     this.list = data;
   console.log(data);
     console.log("list"+this.list[0]);
    this.val=Array.from(this.list);
    // console.log(this.val);
   });
 }


 
 AddToCart1(val:any,val2:any)
 {
   console.log(val,val2);
   this.service.AddToCart(val,this.Quantity,this.UserId,val2).subscribe(data=>
     {
       window.alert("Add to cart successfully");
       this.router.navigate(['/UserMenulist2']);
     })
 }


}
