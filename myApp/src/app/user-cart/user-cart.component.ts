import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.css']
})
export class UserCartComponent implements OnInit {
  CartData;
  totalamt:number=0;
  constructor(private service:UserService,public router:Router) { }

  ngOnInit()
  {
    var id = sessionStorage.getItem("UserId");
   console.log("Home Component Loaded")
   let resultstate=this.service.GetUserCartDetails(id);
   resultstate.subscribe((data:any)=>{
     this.CartData = data;
    
     data.forEach( (element) => {

      this.totalamt=this.totalamt+element.Amount;
      
    });

     console.log(this.CartData);
     this.router.navigate(['UserCart']);
   
       });

}




Delete(Id:any)
{
  
  console.log(Id);
  this.service.DeleteCart(Id).subscribe(()=>
  {
    
    window.alert("Successfuly Deleted");
    this.ngOnInit();
  
  });
  
}

}
