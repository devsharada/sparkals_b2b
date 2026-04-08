import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  imports: [],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  @Output() loginClick = new EventEmitter<void>();
  @Output() verifyOtpClick = new EventEmitter<void>();

  onLoginClick() {
    this.loginClick.emit();
  }
  onVerifyOtpClick() {
    this.verifyOtpClick.emit();
  }
}
