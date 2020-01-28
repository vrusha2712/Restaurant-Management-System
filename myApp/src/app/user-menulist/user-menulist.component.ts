import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menulist',
  templateUrl: './user-menulist.component.html',
  styleUrls: ['./user-menulist.component.css']
})
export class UserMenulistComponent implements OnInit {
  list;
  val;
  val1;
  MenuId;
  Price;
  UserId;
  Quantity;
  Result;
  constructor(private service:UserService , public router:Router) { }

  ngOnInit()
   {
     this.UserId=sessionStorage.getItem("UserId");
  
   console.log("component load");
  let resultstate=this.service.ShowMenuList();
  console.log("menu items"+resultstate);
    resultstate.subscribe((data:any)=>{
      this.list = data;
     // console.log(data[0].MenuId);
     // this.MenuId=data[0].MenuId;
     // this.Price=data[0].Price;
   // console.log(data);
    //  console.log("list"+this.list[0]);
    this.val=Array.from(this.list);
    
    });
  }


  // Add(m)
  // {
  //   var id = sessionStorage.getItem("UserId");
  //   var MenuId = sessionStorage.getItem("MenuId");
  //   let data = myForm.form.value;
  //   this.service. GetAddCartDetails(data).subscribe(()=>
  //   {
  //     window.alert("Successfuly Added");
  //   })
    
  // }
  

  AddToCart1(val:any,val2:any)
  {
    console.log(val,val2);
    this.service.AddToCart(val,this.Quantity,this.UserId,val2).subscribe(data=>
      {
        window.alert("Add to cart successfully");
        this.router.navigate(['/UserMenulist']);
      })
  }

   }
