import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFakeComponent } from './navbar-fake.component';

describe('NavbarFakeComponent', () => {
  let component: NavbarFakeComponent;
  let fixture: ComponentFixture<NavbarFakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarFakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
