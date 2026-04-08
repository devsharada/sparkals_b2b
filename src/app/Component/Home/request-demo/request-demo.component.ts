import { Component } from '@angular/core';
import { AuthComponent } from "../../Unauth/auth/auth.component";

@Component({
  selector: 'app-request-demo',
  imports: [AuthComponent],
  templateUrl: './request-demo.component.html',
  styleUrl: './request-demo.component.css'
})
export class RequestDemoComponent {

    isAuthOpen = false;
  activeAuthTab: 'login' | 'register' = 'login';

  openAuth(tab: 'login' | 'register' = 'login') {
    this.activeAuthTab = tab;
    this.isAuthOpen = true;
  }
    closeAuth() {
    this.isAuthOpen = false;
  }


}
