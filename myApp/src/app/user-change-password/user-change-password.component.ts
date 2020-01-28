import { Component, OnInit } from '@angular/core';
import { PasslogService } from '../passlog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.css']
})
export class UserChangePasswordComponent implements OnInit {
  message : string;
  EmailId:string;
  Opassword:string;
  Npassword:string;
  Cpassword:string;
  constructor(private service:PasslogService,public router:Router)
   {this.router=router;    }

  ngOnInit() {

    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/Login']);
    }
  }



 
  ChangePassword()
{
  this.EmailId= sessionStorage.getItem("EmailId");
  console.log("email id is "+this.EmailId)
  console.log("change password ts"+this.Opassword+this.EmailId+this.Npassword);
  let resultstate = this.service.UserChangePassword(this.EmailId,this.Npassword,this.Opassword);

  resultstate.subscribe((data:any)=>
  {
    if(data.status=='Success')
    {
      alert("Password Changed Successfully !!") ;
      this.router.navigate(['/Login']);
    }
    else
    {
      alert("Enter correct data !!") ;
      console.log(data);
      this.message="something wrong !!!";
    }

  });}

}
