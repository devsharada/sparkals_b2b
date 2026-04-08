import { Component } from '@angular/core';
import { RequestDemoComponent } from "../../Home/request-demo/request-demo.component";
import { DetailsComponent } from "../details/details.component";
import { AdminRegistrationComponent } from "../admin-registration/admin-registration.component";
import { AdminLoginComponent } from "../admin-login/admin-login.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-admin-auth',
  imports: [RequestDemoComponent, DetailsComponent, AdminRegistrationComponent, AdminLoginComponent, NgIf],
  templateUrl: './admin-auth.component.html',
  styleUrl: './admin-auth.component.css'
})
export class AdminAuthComponent {

  isLogin = true; // default: show login form

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

}
