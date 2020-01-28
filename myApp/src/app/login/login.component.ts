import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { PasslogService } from '../passlog.service';
import {Router} from '@angular/router';
import { ResponseData } from 'src/models/response.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

message:string;
submitted:false;
res:ResponseData;

  constructor(public loginService :PasslogService,private router:Router,private translateService: TranslateService)
   {
    translateService.addLangs(["en", "ge", "hi"]);
    translateService.setDefaultLang("en");
    }

  ngOnInit()
   {
    
  }
  switchLanguage(language: string) {
    this.translateService.use(language);
  }

  
  Login(myForm)
  {
    let data=this.loginService.Login(myForm.form.value);
    data.subscribe((ret:ResponseData)=>
    {

      this.res=ret;
      sessionStorage.setItem("UserId",ret.Data.UserId)
      console.log(this.res.Data.EmailId);
      sessionStorage.setItem("EmailId",this.res.Data.EmailId);
     var email =  sessionStorage.getItem("EmailId");
      console.log(email);

      
      sessionStorage.setItem("UserId",this.res.Data.UserId);
      var UserId =  sessionStorage.getItem("UserId");
       console.log(UserId);

      
       sessionStorage.setItem("MenuId",this.res.Data.MenuId);
       var MenuId =  sessionStorage.getItem("MenuId");
        console.log(MenuId);
      if(this.res.status=="success")
      {
        this.message="Login Successfully";
        
        if(this.res.Data.RoleId===11)
        {
          alert("WELCOME Admin"+this.res.Data.Name);
          this.router.navigate(['/Dashboard']);

        }
        else
        {
          alert("WELCOME User"+this.res.Data.Name);
          this.router.navigate(['/DashboardUser']);
        }
      }
      else
      {
          alert("Invalid email or password")
      }     
    });
    

  }
}

