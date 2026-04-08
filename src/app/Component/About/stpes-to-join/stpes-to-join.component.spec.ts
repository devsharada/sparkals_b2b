import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StpesToJoinComponent } from './stpes-to-join.component';

describe('StpesToJoinComponent', () => {
  let component: StpesToJoinComponent;
  let fixture: ComponentFixture<StpesToJoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StpesToJoinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StpesToJoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
