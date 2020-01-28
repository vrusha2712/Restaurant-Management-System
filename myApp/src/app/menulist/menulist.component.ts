import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {

  list;
   val;
  constructor(private service:UserService, 
    public router : Router) { }




  ngOnInit()
   {
   console.log("component load");
  let resultstate=this.service.ShowMenuList();
  console.log("menu items"+resultstate);
    resultstate.subscribe((data:any)=>{
      this.list = data;
    console.log(data);
      console.log("list"+this.list[0]);
     this.val=Array.from(this.list);
     // console.log(this.val);
    });
  }

  


  Delete(Id:any)
  {
    
    console.log(Id);
    this.service.DeleteMenu(Id).subscribe(()=>
    {
      
      window.alert("Successfuly Deleted");
      this.ngOnInit();
    
    });
  }


  
Add(myForm)
{
  let data = myForm.form.value;
  console.log(data);
  this.service.GetAddMenu(data).subscribe(()=>
  {
    window.alert("Successfuly Added");
  })
  
}
    



}
