import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLateraleComponent } from './nav-laterale.component';

describe('NavLateraleComponent', () => {
  let component: NavLateraleComponent;
  let fixture: ComponentFixture<NavLateraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavLateraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavLateraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
