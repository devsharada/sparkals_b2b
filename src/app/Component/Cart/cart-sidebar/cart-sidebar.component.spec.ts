import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSidebarComponent } from './cart-sidebar.component';
import { provideRouter } from '@angular/router';

describe('CartSidebarComponent', () => {
  let component: CartSidebarComponent;
  let fixture: ComponentFixture<CartSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSidebarComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
