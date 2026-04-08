import { Component } from '@angular/core';
import { DetailsComponent } from '../details/details.component';
import { NgClass, NgIf } from '@angular/common';
import { BusinessDetailsComponent } from '../business-details/business-details.component';
import { PersonalDetailsComponent } from '../personal-details/personal-details.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../../Services/admin/admin-auth.service';

@Component({
  selector: 'app-admin-details',
  imports: [ DetailsComponent, NgIf, NgClass, BusinessDetailsComponent, PersonalDetailsComponent, FormsModule ],
  templateUrl: './admin-details.component.html',
  styleUrl: './admin-details.component.css',
})
export class AdminDetailsComponent {
  // for bussiness & personal tab
  activeTab: string = 'business';

  setActive(tab: string) {
    this.activeTab = tab;
  }

  // for registartion successful & admin approval popup
  isSuccessPopupOpen = false;
  isApproved = false; // <-- mock for now, later this comes from backend
  popupGif = '';
  popupTitle = '';
  popupText = '';
  popupMessage = '';

  constructor(private router: Router, private authService: AdminAuthService) {}

  openSuccessPopup() {
    this.authService.setApprovalStatus(this.isApproved); // <-- set approval status

    if (this.isApproved) {
      this.popupGif = '/assets/images/home/success.gif';
      this.popupTitle = 'Congratulations!';
      this.popupText = 'Your account has been approved successfully.';
      this.popupMessage =
        'You can now explore your admin panel, manage your products, and start growing your business.';
    } else {
      this.popupGif = '/assets/images/home/pending.gif';
      this.popupTitle = 'Registration Successful!';
      this.popupText = 'Thank you for registering with us!';
      this.popupMessage =
        'Your account is pending admin approval and will be activated within 24 to 48 hours. You will be notified once your account has been approved.';
    }
    this.isSuccessPopupOpen = true;
  }

  closeSuccessPopup() {
    this.isSuccessPopupOpen = false;
  }

  redirectToProducts() {
    this.isSuccessPopupOpen = false;
    this.authService.setShowHeader(true); // ensure header shows
    this.router.navigate(['/admin/products'], {
      queryParams: { approved: this.isApproved },
    });
  }

}
