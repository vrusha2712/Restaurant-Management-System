import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { PassLogHistoryComponent } from './pass-log-history/pass-log-history.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PasslogService } from './passlog.service';
import {FormsModule} from '@angular/forms';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { MenulistComponent } from './menulist/menulist.component';
import { Menulist1Component } from './menulist1/menulist1.component';
import { Menulist2Component } from './menulist2/menulist2.component';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { UserMenulistComponent } from './user-menulist/user-menulist.component';
import { UserMenulist1Component } from './user-menulist1/user-menulist1.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminLocationComponent } from './admin-location/admin-location.component';
import { UserMenulist2Component } from './user-menulist2/user-menulist2.component';
import { AdminCartComponent } from './admin-cart/admin-cart.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { VisitUsComponent } from './visit-us/visit-us.component';

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { UpdatePlanComponent } from './update-plan/update-plan.component';

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AboutUsComponent,
    HomeComponent,
    PassLogHistoryComponent,
    ChangePasswordComponent,
    DashboardComponent,
    UserComponent,
    CategoryComponent,
    MenulistComponent,
    Menulist1Component,
    Menulist2Component,
    DashboardUserComponent,
    UserMenulistComponent,
    UserMenulist1Component,
    UserLocationComponent,
    PaymentComponent,
    AdminLocationComponent,
    UserMenulist2Component,
    AdminCartComponent,
    UserCartComponent,
    UserChangePasswordComponent,
    VisitUsComponent,
    UpdatePlanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot([
      {path:"Register",component:RegisterComponent},
      {path:"Login",component:LoginComponent},
      {path:"ContactUs",component:ContactUsComponent},
      {path:"AboutUs",component:AboutUsComponent},
      {path:"Home",component:HomeComponent},
      {path:"ChangePassword",component:ChangePasswordComponent},
      {path:"LogHistory",component:PassLogHistoryComponent},
      {path:"Dashboard",component:DashboardComponent},
      {path:"User",component:UserComponent},
      {path:"Category",component:CategoryComponent},
      {path:"MenuList",component:MenulistComponent},
      {path:"MenuList1",component:Menulist1Component},
      {path:"MenuList2",component:Menulist2Component},
      {path:"DashboardUser",component:DashboardUserComponent},
      {path:"UserMenulist",component:UserMenulistComponent},
      {path:"UserMenulist1",component:UserMenulist1Component},
      {path:"UserMenulist2",component:UserMenulist2Component},
      {path:"UserLocation",component:UserLocationComponent},
      {path:"Payment",component:PaymentComponent},
      {path:"AdminLocation",component:AdminLocationComponent},
      {path:"AdminCart",component:AdminCartComponent},
      {path:"UserCart",component:UserCartComponent},
      {path:"UserChangePassword",component:UserChangePasswordComponent},
      {path:"VisitUs",component:VisitUsComponent},
      {path:"UpdatePath/:Id",component:UpdatePlanComponent}



    ])
  ],
  providers: [HttpClientModule,PasslogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
