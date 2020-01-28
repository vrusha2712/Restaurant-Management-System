import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PasslogService {

  constructor(public http: HttpClient)
  { }

  
  GetData()
  {
   return this.http.get("http://localhost:51903/api/Login/passhistory");
  }

  Login(user)
  {
    console.log("service"+user);
    return this.http.post("http://localhost:51903/api/Login",user);
  }

  Add(user)
{
  return this.http.post("http://localhost:51903/api/User/Registration",user);
}

OTPGenerate(email)
{
  alert("inside OTPGenerate ");
  var User={
    "EmailId":email,
    
   };

  return this.http.post("http://localhost:51903/api/User/IsExist", User);
}


OTPValidate(otp,email)
{
  
  alert("inside validateOTP");
  var User={
    "EmailId":email,
    "OTP":otp
   };

 
   console.log(User);
  
  return this.http.post("http://localhost:51903/api/User/OTP", User,);
}
  

Passwordreset(password,email)
{

  alert("inside validateOTP");
  var User={
    "EmailId":email,
    "Password":password,
    
   };

    console.log(User);
   
  return this.http.put("http://localhost:51903/api/User/UpdatePassword", User);
}

UserChangePassword(EmailId,NewPassword,OldPassword)
{

  var User={
    "EmailId":EmailId,
    "NewPassword":NewPassword,
    "Password":OldPassword
    
   };
  return this.http.put("http://localhost:51903/api/User/ChangePassword",User);
}
}
