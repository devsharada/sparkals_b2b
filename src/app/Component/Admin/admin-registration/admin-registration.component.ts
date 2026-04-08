import { Component, EventEmitter, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  imports: [NgIf, RouterLink],
  templateUrl: './admin-registration.component.html',
  styleUrl: './admin-registration.component.css'
})
export class AdminRegistrationComponent {

  @Output() switchForm = new EventEmitter<void>();

// hide/show password
   showPassword = false;
   showPassword1 = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  // for confirm password
  togglePassword1() {
    this.showPassword1 = !this.showPassword1;
  }

}
