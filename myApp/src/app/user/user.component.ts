import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userdata;
  constructor(private service:UserService,public router:Router) { }

  ngOnInit()
   {
        console.log("User Component Loaded");
        let Resultstate=this.service.GetUser();

        Resultstate.subscribe((data)=>
        {
          this.userdata=data['Data'];
          console.log(data);
          console.log(this.userdata);
        });

  }


}
