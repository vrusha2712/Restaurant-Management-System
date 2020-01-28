import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-location',
  templateUrl: './user-location.component.html',
  styleUrls: ['./user-location.component.css']
})
export class UserLocationComponent implements OnInit {
   Location;
   UserId;
   City;
   State;
   Country;
   Pincode;
  constructor(private service:UserService, 
    public router : Router) { }

  ngOnInit() {

    
  }

 

  


    
// Add(myForm)
// {
  
//   this.UserId=sessionStorage.getItem("UserId");
//   let data = myForm.form.value;
//   console.log(data);
//   this.service.GetAddLocation(data).subscribe(()=>
//   {
//     window.alert("Successfuly Added");
//   })
  
// }




Add(myForm)
{
  this.UserId=sessionStorage.getItem("UserId");
  this.service.GetAddLocation1(this.UserId,this.Country,this.State,this.City,this.Pincode).subscribe(data=>
    {
      window.alert("Added successfully");
      this.router.navigate(['/Payment']);
    })
}


}
