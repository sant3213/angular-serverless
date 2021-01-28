import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSigninComponent } from './custom-signin.component';

describe('CustomSigninComponent', () => {
  let component: CustomSigninComponent;
  let fixture: ComponentFixture<CustomSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomSigninComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
