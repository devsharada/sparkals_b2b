import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
   showHeader$ = new BehaviorSubject<boolean>(false); //for admin header
   isApproved$ = new BehaviorSubject<boolean>(false); // track approval

  setShowHeader(show: boolean) {
    this.showHeader$.next(show);
  }

   setApprovalStatus(approved: boolean) {
    this.isApproved$.next(approved);
    this.setShowHeader(approved); // automatically show header if admin approved
  }

  constructor() { }
}
