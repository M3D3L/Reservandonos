import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwipeMenuComponent } from './swipe-menu.component';

describe('SwipeMenuComponent', () => {
  let component: SwipeMenuComponent;
  let fixture: ComponentFixture<SwipeMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwipeMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwipeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
