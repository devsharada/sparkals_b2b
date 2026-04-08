import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

 @Output() registerClick = new EventEmitter<void>();
 @Output() forgotPasswordClick = new EventEmitter<void>();

  onRegisterClick() {
    this.registerClick.emit();
  }
  onforgotPasswordClick() {
    this.forgotPasswordClick.emit();
  }

  // hide/show password
   showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

}
