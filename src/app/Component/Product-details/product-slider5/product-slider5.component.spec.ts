import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlider5Component } from './product-slider5.component';
import { provideRouter } from '@angular/router';

describe('ProductSlider5Component', () => {
  let component: ProductSlider5Component;
  let fixture: ComponentFixture<ProductSlider5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSlider5Component],
      providers : [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSlider5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
