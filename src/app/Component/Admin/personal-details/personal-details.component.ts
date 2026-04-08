import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-details',
  imports: [NgIf, FormsModule],
  templateUrl: './personal-details.component.html',
  styleUrl: './personal-details.component.css',
})
export class PersonalDetailsComponent {
  userPreview: string | null = null;
  aadharPreview: string | null = null;
  panPreview: string | null = null;
  passportPreview: string | null = null;

  user = '';
  aadharNo = '';
  panNo = '';
  passportNo = '';

  onImageSelect(event: Event, type: string) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        if (type === 'user') this.userPreview = reader.result as string;
        if (type === 'aadhar') this.aadharPreview = reader.result as string;
        if (type === 'pan') this.panPreview = reader.result as string;
        if (type === 'passport') this.passportPreview = reader.result as string;
      };

      reader.readAsDataURL(file);
    }
  }
}
