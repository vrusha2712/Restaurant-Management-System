import { Component, OnInit } from '@angular/core';
import { PasslogService } from '../passlog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  flag:Number = 0; 
  email:string = "";
  password:string = "";
  password2:string = "";
  otp:string = "";

  constructor(public service: PasslogService,public router:Router ) { }

  ngOnInit() {
  }
  generateOTP()
  {
    alert("In generate otp");
    let resultstate=this.service.OTPGenerate(this.email);
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.status);
      console.log(data);
      alert("Your OTP :"+data.Data);
      if(data.status=="success")
      {
        this.flag=1;
      }
    });
  }
  validateOTP()
  {
    alert("In validate otp");
    let resultstate=this.service.OTPValidate(this.otp,this.email);
    
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.status);
      if(data.status=="success")
      {
       
        alert("valid OTP");
        this.flag=2;
 
      }
      
    }); 
    
  }

  resetPassword()
  {
    alert("In Reset otp");
    let resultstate=this.service.Passwordreset(this.password,this.email);
    resultstate.subscribe((data:any)=>{
      console.log(":)"+data.Data);
      if(data.status=="success")
      {
        this.router.navigate(['/Login'])
 
      }
      
    }); 
    
  }
}
