import { Component, OnInit } from '@angular/core';
import { PasslogService } from '../passlog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pass-log-history',
  templateUrl: './pass-log-history.component.html',
  styleUrls: ['./pass-log-history.component.css']
})
export class PassLogHistoryComponent implements OnInit 
{
  T_PasswordHistoryLog;
  message;

  constructor(private service: PasslogService, 
    public router : Router) { }

  ngOnInit()
   {
    console.log("Home Component Loaded")
    let resultstate=this.service.GetData();
    resultstate.subscribe((data)=>{
      this.T_PasswordHistoryLog = data;
 });
    
    }

}
