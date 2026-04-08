import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-password',
  imports: [],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent {

  @Output() loginClick = new EventEmitter<void>();

  onLoginClick() {
    this.loginClick.emit();
  }
}
