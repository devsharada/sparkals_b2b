import { Component } from '@angular/core';
import { AuthComponent } from "../../Unauth/auth/auth.component";

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [AuthComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent {

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
