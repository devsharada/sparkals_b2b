import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  imports: [NgIf],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

   @Output() switchForm = new EventEmitter<void>();

// hide/show password
   showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
