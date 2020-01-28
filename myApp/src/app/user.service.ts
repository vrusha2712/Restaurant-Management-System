import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Statement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public Http:HttpClient,public route:Router) { }

  GetUser()
  {
    return this.Http.get("http://localhost:51903/api/User/UserList");
  }

  GetCategory()
  {
    return this.Http.get("http://localhost:51903/api/Category");
  }


  GetAddCategory(category)
  {
    return this.Http.post("http://localhost:51903/api/Category",category);
  }
 
  DeleteCategory(id:any)
  {
    return this.Http.delete("http://localhost:51903/api/Category/"+id);
  }



  ShowMenuList()
  {
    return this.Http.get("http://localhost:51903/api/Menu/1");

  }
  ShowMenuList1()
  {
    return this.Http.get("http://localhost:51903/api/Menu/2");

  }

  ShowMenuList2()
  {
    return this.Http.get("http://localhost:51903/api/Menu/3");

  }

  DeleteMenu(id:any)
  {
    return this.Http.delete("http://localhost:51903/api/Menu/"+id);
  }


  
  GetAddMenu(menu)
  {
    
    return this.Http.post("http://localhost:51903/api/Menu",menu);
  }


  
  GetLocation()
  {
    return this.Http.get("http://localhost:51903/api/Location");
  }


  GetAddLocation(location)
  {
    return this.Http.post("http://localhost:51903/api/Location",location);
  }

  GetAddLocation1(UserId,Country,State,City,Pincode)
  {

    var cartobj={


      "UserId":UserId,
      "Country":Country,
      "State":State,
      "City":City,
      "Pincode":Pincode
    }
    return this.Http.post("http://localhost:51903/api/Location",cartobj);
  }


  GetCartDetails()
  {
    return this.Http.get("http://localhost:51903/api/Cart");
  }
  

  AddToCart(MenuId,Quantity,UserId,Price)
  {

    var cartobj={


      "MenuId":MenuId,
      "Quantity":Quantity,
      "UserId":UserId,
      "Price":Price
    }
    return this.Http.post("http://localhost:51903/api/Cart",cartobj);
  }

  GetUserCartDetails(UserId:any)
  {
    return this.Http.get("http://localhost:51903/api/Cart/"+UserId);
  }

  

  DeleteCart(id:any)
  {
    return this.Http.delete("http://localhost:51903/api/Cart/"+id);
  }

 

  UpdateData(userObject:any)
  {
    console.log("service"+userObject.Id)
    return this.Http.put("http://localhost:51903/api/Menu1/"+userObject.Id,userObject);
  }
  
  GetDataByID(MenuId)
  {
        return this.Http.get("http://localhost:51903/api/Menu1/"+MenuId);
  }

  // GetAddPay(pay)
  // {
  //   return this.Http.post("http://localhost:51903/api/Pay",pay);
  // }

  GetAddPay(UserId,Name,CVV,Card_Number,Expire)
  {

    var payobj={


      "UserId":UserId,
      "Name":Name,
      "CVV":CVV,
      "Card_Number":Card_Number,
      "Expire":Expire
    }
    return this.Http.post("http://localhost:51903/api/Pay",payobj);
  }

}
















































