import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferBannerComponent } from './offer-banner.component';
import { provideRouter } from '@angular/router';

describe('OfferBannerComponent', () => {
  let component: OfferBannerComponent;
  let fixture: ComponentFixture<OfferBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferBannerComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
