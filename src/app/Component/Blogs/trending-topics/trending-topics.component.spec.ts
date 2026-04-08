import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingTopicsComponent } from './trending-topics.component';
import { provideRouter } from '@angular/router';

describe('TrendingTopicsComponent', () => {
  let component: TrendingTopicsComponent;
  let fixture: ComponentFixture<TrendingTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingTopicsComponent],
      providers: [provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
