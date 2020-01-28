import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-admin-location',
  templateUrl: './admin-location.component.html',
  styleUrls: ['./admin-location.component.css']
})
export class AdminLocationComponent implements OnInit {
  LocationData;
  constructor(private service:UserService,public router:Router) { }

 
  ngOnInit()
   {
    console.log("Home Component Loaded")
    let resultstate=this.service.GetLocation();
    resultstate.subscribe((data)=>{
      this.LocationData = data;
          
        });

  }


}
