import { NgIf } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

 @Output() loginClick = new EventEmitter<void>();

onLoginClick() {
  this.loginClick.emit();
}

// hide/show password
   showPassword = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  // hide/show password
   showPassword1 = false;

  togglePassword1() {
    this.showPassword1 = !this.showPassword1;
  }

}
