import { Component, OnInit } from '@angular/core';
import { PasslogService } from '../passlog.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public RegisterService :PasslogService,private router:Router) { }

  ngOnInit() {
  }


  Add(myForm)
  {
    let data = myForm.form.value;
    this.RegisterService.Add(data).subscribe(()=>
    {
      window.alert("Successfuly Added");
      this.router.navigate(['/Login'])
    })
    
  }
}
