import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselFourComponent } from './carousel-four.component';

describe('CarouselFourComponent', () => {
  let component: CarouselFourComponent;
  let fixture: ComponentFixture<CarouselFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
