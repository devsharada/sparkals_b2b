import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSlider3Component } from './product-slider3.component';
import { provideRouter } from '@angular/router';

describe('ProductSlider3Component', () => {
  let component: ProductSlider3Component;
  let fixture: ComponentFixture<ProductSlider3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSlider3Component],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductSlider3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
