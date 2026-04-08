import { Component} from '@angular/core';
import { ShippingComponent } from "../shipping/shipping.component";
import { InformationComponent } from "../information/information.component";
import { ConfirmComponent } from "../confirm/confirm.component";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-checkout-layout',
  imports: [ShippingComponent, InformationComponent, ConfirmComponent, NgIf],
  templateUrl: './checkout-layout.component.html',
  styleUrl: './checkout-layout.component.css'
})
export class CheckoutLayoutComponent {

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
