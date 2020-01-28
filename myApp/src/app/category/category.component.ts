import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
Category;
  constructor(private service:UserService, 
    public router : Router) { }

  ngOnInit()
   {

    console.log("Home Component Loaded")
    let resultstate=this.service.GetCategory();
    resultstate.subscribe((data)=>{
      this.Category = data;
  });
}

Add(myForm)
{
  let data = myForm.form.value;
  this.service.GetAddCategory(data).subscribe(()=>
  {
    window.alert("Successfuly Added");
  })
  
}

Delete(Id:any)
{
  
  console.log(Id);
  this.service.DeleteCategory(Id).subscribe(()=>
  {
    
    window.alert("Successfuly Deleted");
    this.ngOnInit();
  
  });
  
}



}
