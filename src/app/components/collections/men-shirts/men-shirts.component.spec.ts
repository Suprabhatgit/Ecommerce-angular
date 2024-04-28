import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenShirtsComponent } from './men-shirts.component';

describe('MenShirtsComponent', () => {
  let component: MenShirtsComponent;
  let fixture: ComponentFixture<MenShirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenShirtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
