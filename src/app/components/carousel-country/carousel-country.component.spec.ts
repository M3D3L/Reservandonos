import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselCountryComponent } from './carousel-country.component';

describe('CarouselCountryComponent', () => {
  let component: CarouselCountryComponent;
  let fixture: ComponentFixture<CarouselCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
