import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-plan',
  templateUrl: './update-plan.component.html',
  styleUrls: ['./update-plan.component.css']
})
export class UpdatePlanComponent implements OnInit {

  constructor(public routes:ActivatedRoute,
    public service:UserService,
     public router: Router) 
{
this.message = "";  
}
  
  Menu:any;
  message;

  

  ngOnInit() 
  {
     
    var id = sessionStorage.getItem("UserId");
    if(id == null)
    {
      this.router.navigate(['/Login']);
    }
    let parameterArrivalStatus = this.routes.paramMap;

    parameterArrivalStatus.subscribe((params)=>{
      let Id = params.get("Id");
      console.log(params.get("Id"));
      let StatusofMenuSearched= this.service.GetDataByID(Id);

      StatusofMenuSearched.subscribe((result:any)=>{
        console.log(result);
        this.Menu= result;

      //   if(result.status == 'Success')
      //   {
      //     console.log("i am in update ")
      //     this.Menu= result;
      //     console.log(this.Menu.Name);
      //     // this.message = "Record found!"
          
      //   }
      //   else
      //   {
      //     this.message = "Record not found!"
      //   }
       }); 

    });
  }

  Update()
  {
    let statusOfUpdate= this.service.UpdateData(this.Menu);
    statusOfUpdate.subscribe((result:any)=>{
      //console.log(result);
      if(result.status=='Success')
      {
        this.router.navigate(['/Category']);
      }
      else{
        this.message = "Something went wrong!";
      }
    });
  }
}

