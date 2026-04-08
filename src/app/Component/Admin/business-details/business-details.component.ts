import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-details',
  imports: [NgIf, FormsModule],
  templateUrl: './business-details.component.html',
  styleUrl: './business-details.component.css',
})
export class BusinessDetailsComponent {
  businessLogoPreview: string | null = null;
  gstImagePreview: string | null = null;
  panImagePreview: string | null = null;
  udyamImagePreview: string | null = null;
  cinImagePreview: string | null = null;
  shopPhotoPreview: string | null = null;

  businessLogoName: string = '';
  gstName: string = '';
  panNumber: string = '';
  udyamName: string = '';
  cinName: string = '';
  shopPhotoName: string = '';

  onImageSelect(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        switch (type) {
          case 'businessLogo':
            this.businessLogoPreview = reader.result as string;
            this.businessLogoName = file.name;
            break;
          case 'gst':
            this.gstImagePreview = reader.result as string;
            this.gstName = file.name;
            break;
          case 'pan':
            this.panImagePreview = reader.result as string;
            this.panNumber = file.name;
            break;
          case 'udyam':
            this.udyamImagePreview = reader.result as string;
            this.udyamName = file.name;
            break;
          case 'cin':
            this.cinImagePreview = reader.result as string;
            this.cinName = file.name;
            break;
          case 'shopPhoto':
            this.shopPhotoPreview = reader.result as string;
            this.shopPhotoName = file.name;
            break;
        }
      };

      reader.readAsDataURL(file);
    }
  }
}
