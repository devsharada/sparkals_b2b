import { NgIf } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { RouterLink, Router } from '@angular/router';
import { AdminAuthService } from '../../../Services/admin/admin-auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [NgIf, RouterLink, FormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  animations: [
    trigger('fadeSlide', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class DetailsComponent {

  showAdminHeader = false; // <-- declare property

  isDropdownOpen = false;

   @ViewChild('dropdownWrapper') dropdownWrapper!: ElementRef;

  constructor(private authService: AdminAuthService, private router: Router) {}

  ngOnInit() {
    this.authService.showHeader$.subscribe((show) => {
      this.showAdminHeader = show;
    });
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.isDropdownOpen &&
      this.dropdownWrapper &&
      !this.dropdownWrapper.nativeElement.contains(event.target)
    ) {
      this.isDropdownOpen = false;
    }
  }

  isPasswordPopupOpen: boolean = false;

  passwordInput: string = ''; // bind this to the input
  showPassword = false;
  passwordError: any;

  // open/close popup
  openPasswordPopup() { this.isPasswordPopupOpen = true; }
  closePasswordPopup() { this.isPasswordPopupOpen = false; }

  togglePassword() { this.showPassword = !this.showPassword; }

  confirmPassword() {
    // Here, you can validate the password
    if (this.passwordInput === 'admin123') { // replace with real validation
      this.closePasswordPopup();
      this.router.navigate(['/admin/set-price']);
    }  else {
      this.passwordError = 'Incorrect password. Please try again.';
    }
  }
  }

