import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { VerifyOtpComponent } from "../verify-otp/verify-otp.component";
import { UpdatePasswordComponent } from "../update-password/update-password.component";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [NgIf, LoginComponent, RegisterComponent, ForgotPasswordComponent, VerifyOtpComponent, UpdatePasswordComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  @Input() isOpen = false;

  private _activeTab: 'login' | 'register' | 'forgotPassword' | 'verifyOtp' | 'updatePassword' =
    'login';

  @Input()
  set activeTab(value: 'login' | 'register' | 'forgotPassword' | 'verifyOtp' | 'updatePassword') {
    this._activeTab = value ?? 'login';
  }
  get activeTab(): 'login' | 'register' | 'forgotPassword' | 'verifyOtp' | 'updatePassword' {
    return this._activeTab;
  }

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  switchToRegister() {
    this.activeTab = 'register';
  }

  switchToLogin() {
    this.activeTab = 'login';
  }

  switchToForgotPassword() {
    this.activeTab = 'forgotPassword';
  }

  switchToVerifyOtp() {
    this.activeTab = 'verifyOtp';
  }

  switchToUpdatePassword() {
    this.activeTab = 'updatePassword';
  }
}
