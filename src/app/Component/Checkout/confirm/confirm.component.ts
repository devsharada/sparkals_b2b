import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  imports: [FormsModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {

  // for quantity control
   quantity = 1;

  increment() {
    this.quantity++;
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

   activeStep: 'information' | 'shipping' | 'confirm' = 'information';

  goToShipping() {
    this.activeStep = 'shipping';
  }

  goToConfirm() {
    this.activeStep = 'confirm';
  }

  goBackToInformation() {
    this.activeStep = 'information';
  }

  goBackToShipping() {
    this.activeStep = 'shipping';
  }

}
