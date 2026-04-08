import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-verify-otp',
  imports: [],
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.css',
})
export class VerifyOtpComponent {
  @Output() updatePasswordClick = new EventEmitter<void>();
  @Output() forgotPasswordClick = new EventEmitter<void>();

  onForgotPasswordClick() {
    this.forgotPasswordClick.emit();
  }

  onUpdatePasswordClick() {
    this.updatePasswordClick.emit();
  }
}
